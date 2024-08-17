import clipboard from "@/assets/images/clipboard.svg";
import styles from "./Empty.module.css";

export function Empty() {
    return (
        <div className={styles.empty}>
            <img src={clipboard} alt="Icone de uma prancheta com algumas coisas escritas" />
            <div className={styles.infoBox}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}