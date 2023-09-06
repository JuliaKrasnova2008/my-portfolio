import React from 'react'
import './ProjectCards.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../helpers/projectsList'
import { Link } from 'react-router-dom';

export default function ProjectCards() {

    return (
        <div className='project-cards'>
            <h3 className='section__title'>PROJECTS</h3>
            {window.location.pathname === '/' ?
                <>
                    <ul className='project-cards_list'>
                        {
                            projects.slice(0, 4).map((elem, index) => {
                                return <ProjectCard key={index} element={elem} index={index} />
                            })
                        }
                    </ul>
                    <Link to='/project' className='project-cards__show-more'>Show more</Link>
                </>
                :
                <ul className='project-cards_list'>
                    {
                        projects.map((elem, index) => {
                            return <ProjectCard key={index} element={elem} index={index} />
                        })
                    }
                </ul>
            }
        </div>
    )
}

