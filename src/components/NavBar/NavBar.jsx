import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import NavBarModal from '../NavBarModal/NavBarModal'
import burger from '../../images/icons-menu-light.svg'

export default function NavBar() {
    //состояние модалки, нужно передать в пропсы для <Modal />
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const activeLink = 'nav-bar__item nav-bar__item_active'
    const normalLink = 'nav-bar__item'

    return window.innerWidth > 768 ?
        <div className='nav-bar__list'>
            <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                Home
            </NavLink>
            <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : normalLink}>
                Projects
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink} >
                Contacts
            </NavLink>
        </div>
        :
        (
            <>
                <button className='nav-bar__burger-btn'
                    onClick={() => setModalIsOpen(true)}>
                    <img className='nav-bar__burger-img' src={burger} alt='меню' />
                </button>
                <NavBarModal active={modalIsOpen} setActive={setModalIsOpen} />
            </>

        )

}
