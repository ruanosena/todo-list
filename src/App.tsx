import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task, TaskCard } from "./components/TaskCard";

import styles from "./App.module.css";

export function App() {
	const [tasksCount, setTasksCount] = useState(0);
	const [tasks, setTasks] = useState<Task[]>([]);

	const completedTasks = tasks.filter((item) => item.completed);

	function createTask(task: string) {
		setTasks((state) => [
			...state,
			{ id: tasksCount + 1, text: task, completed: false, createdAt: new Date() },
		]);
		setTasksCount((state) => state + 1);
	}

	function completeTask(completed: boolean, taskId: number) {
		setTasks((state) => state.map((task) => (task.id == taskId ? { ...task, completed } : task)));
	}

	function deleteTask(taskId: number) {
		setTasks((state) => state.filter((task) => task.id != taskId));
	}

	return (
		<div>
			<Header />
			<main className={styles.wrapper}>
				<NewTask onCreateNewTask={createTask} />

				<div className={styles.tasks}>
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
								<TaskCard
									key={task.id}
									task={task}
									onCompletedChange={(completed) => completeTask(completed, task.id)}
									onDelete={() => deleteTask(task.id)}
								/>
							))}
						</div>
					) : (
						<div className={styles.listEmpty}>
							<img src="/Clipboard.png" alt="prancheta" />
							<p>
								<strong>Você ainda não tem tarefas cadastradas</strong>
								<br />
								Crie tarefas e organize seus itens a fazer
							</p>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
