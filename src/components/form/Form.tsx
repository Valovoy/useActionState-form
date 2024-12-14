import { useActionState } from 'react'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import styles from './Form.module.css'

interface FormState {
	status: 'idle' | 'loading' | 'success' | 'error'
	message: string
	data?: {
		username?: string
		password?: string
	}
}

const submitForm = async (
	prevState: FormState,
	formData: FormData
): Promise<FormState> => {
	try {
		// Принудительная имитация задержки
		await new Promise(resolve => setTimeout(resolve, 2000))

		const username = formData.get('username') as string
		const password = formData.get('password') as string

		// Простая валидация
		if (!username || !password) {
			return {
				status: 'error',
				message: 'Заполните все поля',
			}
		}

		return {
			status: 'success',
			message: `Привет, ${username}!`,
			data: { username, password },
		}
	} catch (error) {
		return {
			status: 'error',
			message: error instanceof Error ? error.message : 'Неизвестная ошибка',
		}
	}
}

const Form = () => {
	const [state, formAction, isPending] = useActionState<FormState, FormData>(
		submitForm,
		{
			status: 'idle',
			message: '',
			data: {},
		}
	)

	return (
		<form action={formAction} className={styles.container}>
			<Input
				id='username'
				type='text'
				title='Username'
				placeholder='Username'
				errorMessage={state.status === 'error' ? state.message : undefined}
			/>
			<Input
				id='password'
				type='password'
				title='Password'
				placeholder='Password'
				errorMessage={state.status === 'error' ? state.message : undefined}
			/>
			<Button isPending={isPending} />
		</form>
	)
}
export default Form
