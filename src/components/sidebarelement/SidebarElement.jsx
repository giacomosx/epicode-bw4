import React from "react";

const SidebarElement = ({levelTitle, sectionTitle, children}) => {
  return (
    <section className="bg-white rounded p-3 border mb-2">
      <div className="section__header d-flex justify-content-between align-items-center py-2">
        <h4 className={`${levelTitle ? levelTitle : ""} fw-semibold m-0 `}>
          {sectionTitle}
        </h4>
        <div className="section__header__buttons d-flex align-items-center "></div>
      </div>
      <div className="section__body">
        {children}
      </div>
    </section>
  );
};

export default SidebarElement;
