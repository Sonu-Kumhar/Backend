import React from 'react'  //UI layer
import { Link } from 'react-router'
import { useState } from 'react'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const {user, loading, handleLogin} = useAuth()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        await handleLogin(username, password)
    }

    if (loading) {
        return (<main>
            <h1>Loading.....</h1>
        </main>)
    }


  return (
        <main>
            <div className='form-container'>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <input 
                    onInput={(e)=>{setUsername(e.target.value)}}
                    type="text"  
                    name='username'
                    placeholder='Enter username'
                    />
                    <input type='password' 
                    onInput={(e)=>{setPassword(e.target.value)}}
                    name='password'
                    placeholder='enter password'
                    />
                    <button>Login</button>
                </form>

                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </div>
        </main>
  )
}

export default Login