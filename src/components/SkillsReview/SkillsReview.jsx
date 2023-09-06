import React from 'react'
import './SkillsReview.css'


export default function SkillsReview() {
    return (
        <div className='skills-review'>
            <h3 className='section__title'>SKILLS</h3>
            <h4 className='review__heading'>Layout, JSX</h4>
            <p className='review__subtitle'>HTML5, CCS3, CSS media queries, flexbox, grid Layout, Webpack, БЭМ</p>
            <h4 className='review__heading'>Frontend</h4>
            <p className='review__subtitle'>JavaScript, TypeScript, ReactJS, Redux, StyledComponents, JWT</p>
            <h4 className='review__heading'>Backend</h4>
            <p className='review__subtitle'>NodeJS, MongoDB, Express, NodeJS, API, Nginx, Postman </p>
        </div>
    )
}