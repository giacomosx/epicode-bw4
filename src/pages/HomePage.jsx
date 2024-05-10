import React, { useState } from 'react'
import MainLayout from '../layout/mainlayout/MainLayout'
import ProfileSection from '../components/profilesection/ProfileSection'
import ExperiencesList from '../components/experienceslist/ExperiencesList'
import ModalComponent from '../components/modalcomponent/ModalComponent'
import AddnewExperience from '../components/addnewexperience/AddnewExperience'

const HomePage = () => {

  return (
    <MainLayout>
        <ProfileSection sectionTitle={'Esperienza'} levelTitle={'h5'} actions>
          <ExperiencesList userId={'6601c807d0b371001aa894a1'}/>
          <ModalComponent title={'Aggiungi esperienza'} >
            <AddnewExperience />
          </ModalComponent>
        </ProfileSection>
    </MainLayout>
  )
}

export default HomePage