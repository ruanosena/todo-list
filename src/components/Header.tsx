import todoLogo from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.logoImage} src={todoLogo} title="rocket" />
				<div className={styles.logoText}>
					<span>to</span>
					<span>do</span>
				</div>
			</div>
		</header>
	);
}
