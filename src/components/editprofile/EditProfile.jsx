import React, { useState } from 'react'
import { useGetMyProfileQuery, useEdiProfileMutation } from '../../api/profileApi'

const EditProfile = () => {

    const {isLoading, data, error} = useGetMyProfileQuery()

    const [editProfile] = useEdiProfileMutation()

    const [mod, setMod] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target

        setMod({
            ...mod,
            [name] : value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await editProfile({ mod})
            
        } catch (error) {
          console.log(error);
        }
      };
    

  return (
    <form className="bg-white " onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="name"
        placeholder="Name.."
        value={data.name}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="surname"
        placeholder="Surname.."
        value={data.surname}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="username"
        placeholder="Username.."
        value={data.username}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="title"
        placeholder="Title.."
        value={data.title}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="area"
        placeholder="Area.."
        value={data.area}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="email"
        name="email"
        placeholder="E-mail.."
        value={data.email}
      />
      <textarea
        onChange={handleChange}
        className="form-control mb-3"
        name="bio"
        placeholder="Bio.."
        value={data.bio}
      ></textarea>
      <div className="border-top w-100 text-end pt-2">
      <button type="submit" className=" py-1 px-3 rounded-pill fw-semibold mt-2 icon-link save-button">
        Salva
      </button>
      </div>
    </form>
  )
}

export default EditProfile