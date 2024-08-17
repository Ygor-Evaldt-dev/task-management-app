import { TaskType } from "@/types/task.type";
import styles from "./Task.module.css";

type TaskProps = {
    task: TaskType
}

export function Task({
    task
}: TaskProps) {
    return (
        <div className={styles.task}>
            {/* <input type="checkbox" /> */}
            <p>- {task.title}</p>
        </div>
    );
}