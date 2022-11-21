import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../hook/input'
import { useAppDispatch } from '../hook/redux'
import { login, register } from '../store/actions/authActions'

export function AuthPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const username = useInput('')
    const password = useInput('')

    const isFormValid = () => username.value && password.value

    const loginHandler = () => {
        if (isFormValid()) {
            dispatch(login({ username: username.value, password: password.value })).then(() => navigate('/'))
        } else {
            alert('INVALID FORM PLZ CHANGE FAST')
        }
    }

    const submitHandler = async (event: React.FormEvent) => {
        try {
            event.preventDefault()

            if (isFormValid()) {
                await dispatch(register({ username: username.value, password: password.value }))
                navigate('/')
            } else {
                alert('INVALID FORM PLZ CHANGE FAST')
            }
        } catch (error) { }
    }

    return (
        <form className='container max-w-[500px] mx-auto pt-8' onSubmit={submitHandler}>
            <div className='mb-2'>
                <label className='block' htmlFor="username">Username</label>
                <input className='w-full px-2 py-1 border' type="text" id='username' {...username} />
            </div>
            <div className='mb-2'>
                <label className='block' htmlFor="password">Password</label>
                <input className='w-full px-2 py-1 border' type="password" id='password' {...password} />
            </div>
            <button className='px-4 py-2 text-white bg-blue-700 border' type='submit'>Register</button>
            <button className='px-4 py-2 text-white bg-green-700 border' type='button' onClick={loginHandler}>Login</button>
        </form>
    )
}
