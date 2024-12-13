import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import styles from './Form.module.css'

const Form = () => {
	return (
		<form className={styles.container}>
			<Input
				id='username'
				type='text'
				title='Username'
				placeholder='Username'
			/>
			<Input
				id='password'
				type='password'
				title='Password'
				placeholder='Password'
			/>
			<Button />
		</form>
	)
}
export default Form
