import React from 'react'
import ProfilePage from './ResumeContent/components/Profile'
import Navbar from '@/components/ui/Navbar'

const page = () => {
  return (
    <div>
      <div className="pb-5">
        <ProfilePage />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default page