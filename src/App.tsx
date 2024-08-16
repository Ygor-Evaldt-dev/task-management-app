import { v4 as uuidV4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { FormCreateTask } from "./components/form-create-task/FormCreateTask";

import { TaskType } from "./types/task.type";


import styles from "./App.module.css";
import { TaskList } from "./components/task-list/TaskList";
import { EmptyTasksInfo } from "./components/empty-tasks-info/EmptyTasksInfo";

export function App() {
    const [tasks, setTasks] = useState([] as TaskType[]);
    const isNoTasks = tasks.length === 0;

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
                <article>
                    <header></header>
                    {isNoTasks ? (
                        <EmptyTasksInfo />
                    ) : (
                        <TaskList tasks={tasks} />
                    )}
                </article>

            </main >
        </>
    )
}

