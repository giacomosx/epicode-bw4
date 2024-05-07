import React from 'react'

const ProfileSection = ({sectionTitle}) => {
  return (
    <section className='bg-white rounded p-3 border mb-2'>
        <div className="section__header d-flex justify-content-between align-items-center py-2">
            <h3 className='h5 fw-semibold '>{sectionTitle}</h3>
            <div className="section__header__buttons d-flex align-items-center ">

            </div>
        </div>
    </section>
  )
}

export default ProfileSection