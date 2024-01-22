import { Check, Trash } from "@phosphor-icons/react";
import styles from "./TaskCard.module.css";

export interface Task {
	id: number;
	text: string;
	completed: boolean;
	createdAt: Date;
}

interface TaskProps {
	task: Task;
	onCompletedChange: (completed: boolean) => void;
	onDelete: () => void;
}

export function TaskCard({ task, onCompletedChange, onDelete }: TaskProps) {
	function handleCompletedTaskChange() {
		onCompletedChange(!task.completed);
	}

	function handleDelete() {
		onDelete();
	}

	return (
		<div className={styles.card}>
			<div className={styles.cardCheck}>
				<label>
					<input
						type="checkbox"
						name="completed"
						className={styles.checkBox}
						onChange={handleCompletedTaskChange}
						checked={task.completed}
					/>
					<Check className={styles.checkMark} weight="bold" />
				</label>
			</div>
			<div className={task.completed ? styles.cardTextCompleted : styles.cardText}>{task.text}</div>
			<button className={styles.cardDelete} onClick={handleDelete}>
				<Trash size={18} />
			</button>
		</div>
	);
}
