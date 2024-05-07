import React from 'react'
import MainLayout from '../layout/mainlayout/MainLayout'
import ProfileSection from '../components/profilesection/ProfileSection'

const HomePage = () => {
  return (
    <MainLayout>
        <ProfileSection sectionTitle={'Esperienza'} />
    </MainLayout>
  )
}

export default HomePage