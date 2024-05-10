import React from "react";
import ActionButton from "../actionbutton/ActionButton";
import { showModalExp } from "../../redux/modalExpSlice";
import { useDispatch } from "react-redux";

const ProfileSection = ({ sectionTitle, levelTitle, children, actions }) => {
  const dispatch = useDispatch();

  return (
    <section className="bg-white rounded-3 p-4 border mb-2">
      <div className="section__header d-flex justify-content-between align-items-center ">
        <h3 className={`${levelTitle ? levelTitle : ""} fw-semibold`}>
          {sectionTitle}
        </h3>
        {actions && (
          <div className="section__header__buttons d-flex align-items-center ">
            <ActionButton
              iconName={"add"}
              onClick={() => dispatch(showModalExp())}
            />
            <ActionButton iconName={"pencil-outline"} />
          </div>
        )}
      </div>
      <div className="section__body pt-3 ">{children}</div>
    </section>
  );
};

export default ProfileSection;
