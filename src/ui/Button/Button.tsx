import styles from './Button.module.css'

interface IProps {
	isPending: boolean
}

const Button = ({ isPending }: IProps) => {
	return (
		<button type='submit' className={styles.btn} disabled={isPending}>
			{isPending ? 'Loading...' : 'Log in'}
		</button>
	)
}
export default Button
