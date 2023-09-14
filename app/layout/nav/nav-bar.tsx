'use client'

import { useState } from 'react'
import './nav-bar.css'

export const NavBar = (props: NavBarProps) => {

    return (
        <header>
            <div className="app-title">
                <span className="icon"></span>
                <h1> My Diet</h1>
            </div>
            <button className="menu-toggle" id="menu-toggle" onClick={props.onMenuClick}>
                <span className="hamburger"></span>
            </button>
            <div className="menu">
                <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link" href="/">Main</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/calories">Calories</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/settings">Settings</a>
                </li>
                <li className="menu__item">
                    <span className="menu__link" onClick={props.onClearClick}>Clear Portions</span>
                </li>
                </ul>
            </div>
        </header>
        )
}

export interface NavBarProps {
    onMenuClick: () => void,
    onClearClick: () => void
}