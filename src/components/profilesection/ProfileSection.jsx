import React from "react";

const ProfileSection = ({ sectionTitle, levelTitle, children}) => {

  return (
    <section className="bg-white rounded p-4 border mb-2">
      <div className="section__header d-flex justify-content-between align-items-center py-2">
        <h3 className={`${levelTitle ? levelTitle : ''} fw-semibold`}>{sectionTitle}</h3>
        <div className="section__header__buttons d-flex align-items-center ">

        </div>
      </div>
      <div className="section__body pt-3 ">
        {children}
      </div>
    </section>
  );
};

export default ProfileSection;
