import React from 'react'
import SkillsSection from './components/Skills'
import Timeline from './components/Timeline'
import AdditionalInfo from './components/AdditionalInfo'

const ResumeContent = () => {
    return (
        <div>
            <div className="pt-10 pb-10 bg-slate-100">
                <SkillsSection />
            </div>
            <div className="pt-10 pb-10 bg-slate-100">
                <Timeline />
            </div>
            <div className="pt-10 pb-10 bg-slate-100">
                <AdditionalInfo />
            </div>
        </div>


    )
}

export default ResumeContent