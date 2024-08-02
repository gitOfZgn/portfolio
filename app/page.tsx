import React from 'react'
import Navbar from './Navbar'
import ProfilePage from '@/components/ui/Profile'

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