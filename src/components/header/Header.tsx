import rocketSvg from "@/assets/images/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketSvg} alt="Logo com a imagem de um foguete" />
            <h1 title="Minhas Tarefas"></h1>
        </header>
    );
}