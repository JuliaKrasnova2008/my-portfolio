import React from 'react'
import './ProjectCard.css'
import { NavLink } from 'react-router-dom'

export default function ProjectCard({ element, index }) {
    return window.location.pathname === '/' ?
        <>
            <li className='project-card__item project-card__item_main' target="_blank">
                <img className='project-card__img project-card__img_main' src={element.img} alt="Картинка проекта" />
                <h4 className='project-card__title project-card__title_main'>{element.title}</h4>
                <p className='project-card__subtitle'>{element.skills}</p>
            </li>
        </>
        : <>
            <NavLink to={`/project-review/${index}`}>
                <li className='project-card__item' target="_blank">
                    <img className='project-card__img' src={element.img} alt="Картинка проекта" />
                    <h4 className='project-card__title'>{element.title}</h4>
                    <p className='project-card__subtitle'>{element.skills}</p>
                </li>
            </NavLink>

        </>



}
