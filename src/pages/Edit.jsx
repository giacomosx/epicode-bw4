import React from 'react'
import MainLayout from '../layout/mainlayout/MainLayout'
import ProfileSection from '../components/profilesection/ProfileSection'
import ExperiencesList from '../components/experienceslist/ExperiencesList'
import ModalComponent from '../components/modalcomponent/ModalComponent'
import EditExperience from '../components/ediexperience/EditExperience'

const Edit = () => {

  return (
    <MainLayout>
      <ProfileSection sectionTitle={"Esperienza"} levelTitle={"h5"}>
        <ExperiencesList userId={"6601c807d0b371001aa894a1"} />
        <ModalComponent title='Modifica esperienza'>
          <EditExperience />
        </ModalComponent>
      </ProfileSection>
    </MainLayout>
  )
}

export default Edit