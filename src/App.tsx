import { v4 as uuidV4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { FormCreateTask } from "./components/form-create-task/FormCreateTask";

import { TaskType } from "./types/task.type";

import styles from "./App.module.css";

export function App() {
    const [tasks, setTasks] = useState([] as TaskType[]);

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
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                {task.title}
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}

