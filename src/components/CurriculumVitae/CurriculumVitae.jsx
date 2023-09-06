import React from 'react'
import './CurriculumVitae.css'
import abstract from '../../images/abstract.svg'
import { Link } from 'react-router-dom'

export default function CurriculumVitae() {
    return (
        <div className='curriculum-vitae'>
            <img className='curriculum-vitae__img rotation' src={abstract} alt='Абстракция' />
            <h2 className='curriculum-vitae__title'>HELLO</h2>
            <h3 className='curriculum-vitae__title'>my name is
                <span className='curriculum-vitae__title_name'> Julia</span>
            </h3>
            <p className='curriculum-vitae__education'>I’m a junior frontend developer</p>
            <p className='curriculum-vitae__subtitle'>you have to study a lot to know a little</p>
            <Link to="/cv" className='curriculum-vitae__link' href='#' target="_blank">Download CV</Link>
        </div>
    )
}

