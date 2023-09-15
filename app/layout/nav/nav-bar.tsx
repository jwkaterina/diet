'use client'

import './nav-bar.css'
import Link from 'next/link'


export const NavBar = (props: NavBarProps) => {

    return (
        <header>
            <div className="app-title">
                <Link className="icon" href="/"></Link>
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