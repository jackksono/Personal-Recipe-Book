import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App'
import { BrowserRouter } from "react-router-dom";
import { RecipeContextProvider } from "./context/RecipeContext";

ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
    <RecipeContextProvider>
    <App />
    </RecipeContextProvider>
    </BrowserRouter>
</React.StrictMode>, 
document.getElementById('root')
);