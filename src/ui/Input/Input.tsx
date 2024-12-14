import styles from './Input.module.css'

interface IProps {
	type: string
	placeholder: string
	id: string
	title: string
	errorMessage?: string
}

const Input = ({ id, type, placeholder, title, errorMessage }: IProps) => {
	return (
		<div className={styles.container}>
			<label htmlFor={id} className={styles.title}>
				{title}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				className={styles.input}
				placeholder={placeholder}
			/>
			{errorMessage && <span className={styles.error}>{errorMessage}</span>}
		</div>
	)
}
export default Input
