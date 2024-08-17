import styles from "./TaskListHeader.module.css";

type TaskListHeaderProps = {
    created: number;
    finished: number;
}

export function TaskListHeader({
    created,
    finished
}: TaskListHeaderProps) {
    return (
        <header className={styles.header}>
            <aside>
                <p>Tarefas criadas</p>
                <span className={styles.number}>{created}</span>
            </aside>
            <aside>
                <p>Concluídas</p>
                <span className={styles.number}>{finished} de {created}</span>
            </aside>
        </header>
    );
}