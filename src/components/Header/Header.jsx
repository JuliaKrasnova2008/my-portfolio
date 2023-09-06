import React from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import LightDarkTheme from '../LightDarkTheme/LightDarkTheme'

export default function Header() {
    return (
        <div className='header'>
            <Link to="/" className='nav-bar__item'>
                <h1 className='header__title'>Julia Krasnova
                    <span className='header__span'> portfolio</span>
                </h1>
            </Link>

            <NavBar />
            <LightDarkTheme />

        </div>
    )
}
