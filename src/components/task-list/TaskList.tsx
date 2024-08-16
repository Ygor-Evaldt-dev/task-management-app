import { TaskType } from "@/types/task.type";
import styles from "./TaskList.module.css";

type TaskListProps = {
    tasks: TaskType[]
}

export function TaskList({
    tasks
}: TaskListProps) {
    return (
        <ul className={styles.taskList}>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <div className={styles.task}>
                            <input type="checkbox" />
                            <p>{task.title}</p>
                        </div>
                        <button>Excluir</button>
                    </li>
                )
            })}
        </ul>
    );
}