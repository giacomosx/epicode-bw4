import React, { useState } from "react";
import { useCreateExperienceMutation } from "../../api/experienceApi";

const AddnewExperience = () => {
  const [createExperience] = useCreateExperienceMutation();

  const [newExperience, setExperience] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExperience({
      ...newExperience,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await createExperience({userId: "6601c807d0b371001aa894a1", newExperience})
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="bg-white rounded border p-3 mb-3" onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="role"
        placeholder="Role.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="company"
        placeholder="Company.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="date"
        name="startDate"
        placeholder="Start date.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="date"
        name="endDate"
        placeholder="End date.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="area"
        name="area"
        placeholder="Area.."
      />
      <textarea
        onChange={handleChange}
        className="form-control mb-3"
        name="description"
        placeholder="Description.."
      ></textarea>
      <button type="submit" className="btn btn-dark ">
        Add
      </button>
    </form>
  );
};

export default AddnewExperience;
