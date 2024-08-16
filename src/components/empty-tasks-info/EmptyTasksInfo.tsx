import clipboard from "@/assets/images/clipboard.svg";
import styles from "./EmptyTasksInfo.module.css";

export function EmptyTasksInfo() {
    return (
        <div className={styles.emptyTasksBox}>
            <img src={clipboard} alt="Icone de uma prancheta com algumas coisas escritas" />
            <div className={styles.infoBox}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}