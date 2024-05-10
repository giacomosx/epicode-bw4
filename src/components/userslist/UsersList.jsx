import React from "react";
import { useGetProfilesQuery } from "../../api/profileApi";
import UserElement from "../userelement/UserElement";
import "./userslist.css";

const UsersList = () => {
  const { isLoading, data, error } = useGetProfilesQuery();

  console.log(data);

  return (
    <ul className="p-0 users-list">
      {isLoading && <span>Loading...</span>}
      {error && <span>Ops...there was an error!</span>}
      {!isLoading &&
        data
          .slice(0, 5)
          .map((user, indx) => (
            <UserElement
              key={"user" + indx}
              image={user.image}
              name={user.name}
              surname={user.surname}
              title={user.title}
            />
          ))}
    </ul>
  );
};

export default UsersList;
