import { Check, Trash } from "@phosphor-icons/react";
import { TaskType } from "@/types/task.type";

import styles from "./Task.module.css";

type TaskProps = {
    task: TaskType;
    onTaskToggle: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({
    task,
    onTaskToggle,
    onDeleteTask
}: TaskProps) {
    function handleTaskToggle() {
        onTaskToggle(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.task} >
            <div className={styles.label} onClick={handleTaskToggle}>
                <input readOnly type="checkbox" checked={task.isFinished} />
                <span className={`
                ${styles.checkbox} 
                ${task.isFinished ? styles.checkboxChecked : styles.checkboxUnchecked}
            `}>
                    <Check size={12} />
                </span>
                <p className={`
                ${styles.title} 
                ${task.isFinished ? styles.titleThrough : ""}    
            `}>{task.title}</p>
            </div>

            <button onClick={handleDeleteTask}>
                <Trash size={22} weight="bold" />
            </button>
        </div>
    );
}