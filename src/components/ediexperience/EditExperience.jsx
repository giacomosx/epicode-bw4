import React, { useState } from "react";
import {
  useEditExperienceMutation,
  useGetExperienceQuery,
} from "../../api/experienceApi";
import { experienceToEdit } from "../../redux/experienceSelectedSpice";
import { useSelector } from "react-redux";
import "./editexperience.css";

const EditExperience = () => {
  const idExp = useSelector(experienceToEdit);

  const { data } = useGetExperienceQuery({
    userId: "6601c807d0b371001aa894a1",
    expId: idExp,
  });
  const [mod, setMod] = useState(data);
  const [editExperience, { isLoading, isSuccess, isError }] =
    useEditExperienceMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMod({
      ...mod,
      [name]: value,
    });
  };

  console.log(mod);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await editExperience({
        userId: "6601c807d0b371001aa894a1",
        expId: idExp,
        expModified: mod,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {data && (
        <form className="bg-white " onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            className="form-control mb-3"
            type="text"
            name="role"
            placeholder="Role.."
            value={data.role}
          />
          <input
            onChange={handleChange}
            className="form-control mb-3"
            type="text"
            name="company"
            placeholder="Company.."
            value={data.company}
          />
          <input
            onChange={handleChange}
            className="form-control mb-3"
            type="text"
            name="startDate"
            placeholder="Start date.."
            value={data.startDate}
          />
          <input
            onChange={handleChange}
            className="form-control mb-3"
            type="text"
            name="endDate"
            placeholder="End date.."
            value={data.endDate}
          />
          <input
            onChange={handleChange}
            className="form-control mb-3"
            type="area"
            name="area"
            placeholder="Area.."
            value={data.area}
          />
          <textarea
            onChange={handleChange}
            className="form-control mb-3"
            name="description"
            placeholder="Description.."
            value={data.description}
          ></textarea>
          <div className="border-top w-100 text-end pt-2">
            <div className="text-start">
              {isLoading && <span>Invio...</span>}
              {isSuccess && (
                <span className="text-success">Esperienza modificata</span>
              )}
              {isError && (
                <span className="text-danger">
                  Ops..qualcosa è andato storto!
                </span>
              )}
            </div>
            <button
              type="submit"
              className=" py-1 px-3 rounded-pill fw-semibold mt-2 icon-link save-button"
            >
              Salva
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditExperience;
