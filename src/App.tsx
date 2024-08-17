import { v4 as uuidV4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { FormCreateTask } from "./components/form-create-task/FormCreateTask";
import { Empty } from "./components/empty/Empty";
import { TaskListHeader } from "./components/task-list-header/TaskListHeader";
import { Task } from "./components/task/Task";

import { TaskType } from "./types/task.type";

import styles from "./App.module.css";
import { Trash } from "@phosphor-icons/react";

export function App() {
    const [tasks, setTasks] = useState([] as TaskType[]);

    const isNoTasks = tasks.length === 0;

    const tasksFinished = tasks.filter(task => task.isFinished === true);

    function handleDeleteTask(id: string) {
        const tasksWithoutDeleted = tasks.filter(task => task.id !== id);
        setTasks(tasksWithoutDeleted);
    }

    function onCreateNewTask(title: string) {
        setTasks([...tasks, {
            id: uuidV4(),
            isFinished: false,
            title
        }]);
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
                        <ul className={styles.taskList}>
                            {tasks.map(task => {
                                return (
                                    <li key={task.id}>
                                        <Task task={task} />
                                        <button onClick={() => handleDeleteTask(task.id)}>
                                            <Trash size={22} weight="bold" />
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </article>

            </main >
        </>
    )
}

