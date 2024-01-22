import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Plus } from "@phosphor-icons/react";

import styles from "./NewTask.module.css";

interface NewTaskProps {
	onCreateNewTask: (task: string) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
	const [taskText, setTaskText] = useState("");

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		const task = taskText.trim();
		if (task) {
			onCreateNewTask(task);
			setTaskText("");
		}
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");
		setTaskText(event.target.value);
	}

	function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity("O nome da tarefa é obrigatório!");
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.taskForm}>
			<input
				type="text"
				name="newTask"
				placeholder="Adicione uma nova tarefa"
				className={styles.input}
				value={taskText}
				onChange={handleNewTaskChange}
				onInvalid={handleNewTaskInvalid}
				required
			/>
			<button type="submit" className={styles.button}>
				Criar
				<span className={styles.buttonIcon}>
					<Plus size={12} />
				</span>
			</button>
		</form>
	);
}
