import React from 'react'
import './ProjectReview.css'
import { projects } from '../../helpers/projectsList'
import { Link, useParams } from 'react-router-dom'

import gitHub from '../../images/gitHub-black.svg'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'


export default function ProjectReview() {

    const { id } = useParams();
    const project = projects[id];

    console.log(projects);

    return window.innerWidth > 768 ?
        <>
            <div className='project-review'>
                <Link to="/project" className='project-review__back'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M14.4374 16.0001L21.0374 22.6001L19.1521 24.4854L10.6667 16.0001L19.1521 7.51475L21.0374 9.40008L14.4374 16.0001Z" fill="black" />
                    </svg>
                </Link>

                <h3 className='section__title'>{project.title}</h3>
                <Slider>
                    <video controls className='item item-1'>
                        <source src={project.video} type="video/mp4" />
                    </video>
                    <img className='item item-1' src={project.imgBig} alt="Картинка проекта в большом размере" />
                </Slider>
                <h4 className='project-review__skills'>Skills: {project.skills}</h4>
                <a className='project-review__link' target="_blank" href={project.gitHubLink}>
                    <img className='project-review__icon' alt="Гит" src={gitHub} />
                    GitHub repo
                </a>
                {project.siteLink && (
                    <a className='project-review__link' target="_blank" href={project.siteLink}>
                        Link to web-site
                    </a>)
                }
            </div>
            <Footer />
        </>
        :
        <>
            <div className='project-review'>
                <Link to="/project" className='project-review__back'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M14.4374 16.0001L21.0374 22.6001L19.1521 24.4854L10.6667 16.0001L19.1521 7.51475L21.0374 9.40008L14.4374 16.0001Z" fill="black" />
                    </svg>
                </Link>

                <h3 className='section__title'>{project.title}</h3>

                <video controls className='item item-1'>
                    <source src={project.video} type="video/mp4" />
                </video>

                <h4 className='project-review__skills'>Skills: {project.skills}</h4>
                <a className='project-review__link' target="_blank" href={project.gitHubLink}>
                    <img className='project-review__icon' alt="Гит" src={gitHub} />
                    GitHub repo
                </a>
                {project.siteLink && (
                    <a className='project-review__link' target="_blank" href={project.siteLink}>
                        Link to web-site
                    </a>)
                }
            </div>
            <Footer />
        </>






}
