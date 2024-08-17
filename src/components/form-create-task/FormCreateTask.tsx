import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./FormCreateTask.module.css";
import { PlusCircle } from "@phosphor-icons/react";

type FormCreateTaskProps = {
    onCreateNewTask: (title: string) => void
}

export function FormCreateTask({
    onCreateNewTask
}: FormCreateTaskProps) {
    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateNewTask(newTaskText);
    }

    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    return (
        <form className={styles.form} onSubmit={handleCreateNewTask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTaskText}
                onChange={handleNewTaskText}
            />
            <button type="submit">
                Criar
                <PlusCircle size={18} color="#f2f2f2" weight="bold" />
            </button>
        </form>
    );
}