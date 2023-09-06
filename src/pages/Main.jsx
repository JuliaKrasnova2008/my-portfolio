import React from 'react'
import CurriculumVitae from '../components/CurriculumVitae/CurriculumVitae'
import ProjectCards from '../components/ProjectCards/ProjectCards'
import SkillsReview from '../components/SkillsReview/SkillsReview'
import Footer from '../components/Footer/Footer'

export default function Main() {
    return (
        <>
            <CurriculumVitae />
            <ProjectCards />
            <SkillsReview />
            <Footer />
        </>
    )
}
