import React, { Component, useState } from 'react';
import "../styles.css";
import { Route, Routes, Link, createRoutesFromElements} from 'react-router-dom';
import { Login } from './Login';
import { Signup } from './Signup';
import { CreateRecipe } from './CreateRecipe';
import { LoggedInScreen } from './LoggedInScreen';
import { Navbar } from './NavBar';



// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route>

//         </Route>
//     )
// )
function App() {
    

    const [currentForm, setCurrentForm] = useState('login')

    const reRoute = (formName) => {
        setCurrentForm(formName);
    }
    
        return (
        <div className='App'>
            
            <Navbar/>
            <div className='contents'>
                    <LoggedInScreen/>
            {/* <h2 className='App'>{currentForm === 'login' ? <Login switchPage={reRoute}/> : <Signup switchPage={reRoute}/>}</h2>  */}
            <CreateRecipe/>
            
            </div>
        </div>
        )
    }


export default App;