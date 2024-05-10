import React from 'react'
import MainLayout from '../layout/mainlayout/MainLayout'
import ProfileSection from '../components/profilesection/ProfileSection'
import ExperiencesList from '../components/experienceslist/ExperiencesList'

const HomePage = () => {

  return (
    <MainLayout>
        <ProfileSection sectionTitle={'Esperienza'} levelTitle={'h5'}>
          <ExperiencesList userId={'6601c807d0b371001aa894a1'}/>
        </ProfileSection>
    </MainLayout>
  )
}

export default HomePage