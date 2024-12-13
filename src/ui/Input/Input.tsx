import styles from './Input.module.css'

interface IProps {
	type: string
	placeholder: string
	id: string
	title: string
}

const Input = ({ id, type, placeholder, title }: IProps) => {
	return (
		<div className={styles.container}>
			<label htmlFor={id} className={styles.title}>
				{title}
			</label>
			<input
				id={id}
				type={type}
				className={styles.input}
				placeholder={placeholder}
			/>
			{/* <span className={styles.error}>Error several times</span> */}
		</div>
	)
}
export default Input
