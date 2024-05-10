import React from "react";
import { useGetExperiencesQuery } from "../../api/experienceApi";

import "./experienceslist.css";
import ExperienceElement from "../experienceelement/ExperienceElement";

const ExperiencesList = ({ userId }) => {
  const { isLoading, data, error } = useGetExperiencesQuery(userId);

  console.log(data);

  return (
    <ul className="p-0 experiences-list">
      {isLoading && <span>Loading...</span>}
      {error && <span>Ops...there was an error!</span>}
      {!isLoading &&
        data.map((exp, indx) => (
          <ExperienceElement
            key={'exp' + indx}
            role={exp.role}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            area={exp.area}
            description={exp.description}
          />
        ))}
    </ul>
  );
};

export default ExperiencesList;
