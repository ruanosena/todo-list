import { Task, TaskCard } from "./TaskCard";

import styles from "./TasksList.module.css";

interface TasksListProps {
	tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
	const completedTasks = tasks.filter((item) => item.completed);

	return (
		<div className={styles.container}>
			<header className={styles.info}>
				<div className={styles.infoCreated}>
					Tarefas criadas <span className={styles.infoValue}>{tasks.length}</span>
				</div>
				<div className={styles.infoCompleted}>
					Concluídas{" "}
					<span className={styles.infoValue}>
						{completedTasks.length} de {tasks.length}
					</span>
				</div>
			</header>

			{tasks.length > 0 ? (
				<div className={styles.list}>
					{tasks.map((task) => (
						<TaskCard task={task} />
					))}
				</div>
			) : (
				<div className={styles.listEmpty}>
					<img src="/Clipboard.png" alt="clipboard" />
					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						<br />
						Crie tarefas e organize seus itens a fazer
					</p>
				</div>
			)}
		</div>
	);
}
