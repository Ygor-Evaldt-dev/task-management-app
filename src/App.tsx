import { v4 as uuidV4 } from "uuid";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

import { Header } from "./components/header/Header";
import { FormCreateTask } from "./components/form-create-task/FormCreateTask";
import { Empty } from "./components/empty/Empty";
import { TaskListHeader } from "./components/task-list-header/TaskListHeader";
import { Task } from "./components/task/Task";

import { reorderList } from "./util/reorder-list";

import { TaskType } from "./types/task.type";

import styles from "./App.module.css";

export function App() {
    const [tasks, setTasks] = useState([] as TaskType[]);

    const isNoTasks = tasks.length === 0;
    const tasksFinished = tasks.filter(task => task.isFinished === true);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (!storedTasks) return;

        setTasks(JSON.parse(storedTasks));
    }, [])

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) return;

        const tasksReordered = reorderList<TaskType>(tasks, result.source.index, result.destination.index);

        setTasks(tasksReordered);
        saveTasksToLocalStorage(tasksReordered);
    }


    function onDeleteTask(id: string) {
        const tasksWithoutDeleted = tasks.filter(task => task.id !== id);
        setTasks(tasksWithoutDeleted);
        saveTasksToLocalStorage(tasksWithoutDeleted);
    }

    function onCreateNewTask(title: string) {
        setTasks((tasks) => {
            const tasksWithNewTask = [
                ...tasks,
                {
                    id: uuidV4(),
                    isFinished: false,
                    title
                }
            ];

            saveTasksToLocalStorage(tasksWithNewTask);

            return tasksWithNewTask;
        });
    }

    function onTaskToggle(id: string) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                const value = task.isFinished === true ? false : true;
                return { ...task, isFinished: value }
            }

            return task;
        }).sort(sortTasksByIsFinished);

        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    }

    function sortTasksByIsFinished(x: TaskType, y: TaskType) {
        if (x.isFinished === y.isFinished) return 0;
        else if (x.isFinished) return 1;
        return -1.
    }

    function saveTasksToLocalStorage(tasks: TaskType[]) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <FormCreateTask onCreateNewTask={onCreateNewTask} />
                <article className={styles.tasks}>
                    <TaskListHeader created={tasks.length} finished={tasksFinished.length} />
                    {isNoTasks ? (
                        <Empty />
                    ) : (
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="taskList" type="list" direction="vertical">
                                {(provided) => (
                                    <ul
                                        className={styles.taskList}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {tasks.map((task, index) => {
                                            return (
                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                    {(provided) => (
                                                        <li
                                                            key={task.id}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Task
                                                                task={task}
                                                                onTaskToggle={onTaskToggle}
                                                                onDeleteTask={onDeleteTask}
                                                            />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    )}
                </article>
            </main >
        </>
    )
}

