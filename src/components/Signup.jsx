import React, { Component, useState } from 'react';

export const Signup = (props) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');


 const handleSubmit = (e) => {
        e.preventDefault();
    }
 
    return (
        <>
        <form className='signupForm'  onSubmit= {handleSubmit}>
                    <ul> <label htmlFor="firstName">First Name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='firstName' name='firstName' ></input>
                    <label htmlFor="lasttName">Last Name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='lastName' name='lastName' ></input>
                    <label htmlFor="username">Create Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type='username' name='username'  ></input>
                    <label htmlFor="password">Create Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' name='password'  ></input>
                    <button type='submit'>Create User</button>
                    </ul>
         </form>
          <button onClick={() => props.switchPage('login')}>Already have an account? Login here</button> 
                    
         </>
    )
}

