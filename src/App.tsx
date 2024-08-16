import { v4 as uuidV4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { FormCreateTask } from "./components/form-create-task/FormCreateTask";

import { TaskType } from "./types/task.type";


import clipboard from "./assets/images/clipboard.svg";
import styles from "./App.module.css";
import { TaskList } from "./components/task-list/TaskList";

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
                    {
                        isNoTasks ? (
                            <div className={styles.noTasksBox}>
                                <img src={clipboard} alt="Icone de uma prancheta com algumas coisas escritas" />
                                <div className={styles.infoBox}>
                                    <p>Você ainda não tem tarefas cadastradas</p>
                                    <p>Crie tarefas e organize seus itens a fazer</p>
                                </div>
                            </div>
                        ) : (
                            <TaskList tasks={tasks} />
                        )}
                </article>

            </main >
        </>
    )
}

