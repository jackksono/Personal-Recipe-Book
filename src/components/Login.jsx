import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Signup } from './Signup';

export const Login = (props) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    }

        return (
            <div className='formContainer'>
            <form className='loginForm' onSubmit= {handleSubmit}>
                    <label htmlFor="username"></label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type='username' name='username' placeholder='username...' ></input>
                    <label htmlFor="password"></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' name='password' placeholder='password...' ></input>
                    <button type='submit'>Login</button>
            </form>
            <div className='createSignupButton'>
                <Link to= '/' component={<Signup/>}> 
                    <button type= 'button'> Register here </button> 
                </Link>
            </div>
           </div>
          
        )
    }



