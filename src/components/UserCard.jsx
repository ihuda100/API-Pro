import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({
  id,
  username,
  firstName,
  lastName,
  email,
  image,
  city,
  onClick,
} ) => {
  return (
    <div className="user-card">
      <div  className="">
        <img src={image} alt="Profil" />
        <h6 className="id rounded rounded-5 ">{id}</h6>
      </div>
      <div className="col-7">
        <h5>
          <strong>Name:</strong>
          {firstName} {lastName}
        </h5>
        <h5> <strong>Username:</strong> {username}</h5>
        <h5><strong>Email:</strong> {email}</h5>
        <h5><strong>City:</strong> {city}</h5>
        <button className="btn btn-success mt-1 p-1" onClick={onClick}>Show weather</button>
      </div>
    </div>
  );
};

export default UserCard;
