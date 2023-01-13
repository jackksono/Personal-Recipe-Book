import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link>
            <h1>Personal Recipe Outlet</h1>
            </Link>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="https://www.foodnetwork.com/" >Food Network</a>
                    <a href="https://www.allrecipes.com/recipes/" >All Recipes</a>
                </div>
        </nav>
    )
}