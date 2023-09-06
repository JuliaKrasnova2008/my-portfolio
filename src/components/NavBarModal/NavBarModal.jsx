import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBarModal({ active, setActive }) {
    const activeLinkOverlay = 'nav-bar__item nav-bar__item_active_overlay'
    const normalLinkOverlay = 'nav-bar__item nav-bar__item_overlay'

    return (
        <div className={active ? 'navigation__overlay active' : 'navigation__overlay'}
            onClick={() => setActive(false)}
        >
            <div className="navigation__container-wrapper"></div>
            <div className="navigation__list">
                <button className="navigation__close-button"
                    onClick={() => setActive(false)}
                ></button>
                <nav className="navigation__link">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeLinkOverlay : normalLinkOverlay}>
                        Home
                    </NavLink>
                    <NavLink to="/project" className={({ isActive }) => isActive ? activeLinkOverlay : normalLinkOverlay}>
                        Projects
                    </NavLink>
                    <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLinkOverlay : normalLinkOverlay} >
                        Contacts
                    </NavLink>
                </nav>
            </div>
        </div >

    )
}
