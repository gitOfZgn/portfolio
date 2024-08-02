import AdditionalInfo from '@/components/ui/AdditionalInfo'
import Skills from '@/components/ui/Skills'
import Timeline from '@/components/ui/Timeline'
import React from 'react'

const ResumeContent = () => {
    return (
        <div>
            <div className="pt-10 pb-10 bg-slate-100">
                <Skills />
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