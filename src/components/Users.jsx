import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let city = "";
  const refCity = useRef();
  const navigate = useNavigate();

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const {
        data: { users },
      } = await axios.get("https://dummyjson.com/users");
      setUsers(users);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleShowWeather = (i) => {
    city = users[i].address.city;
    navigate("/weather", { state: { city } });
    console.log(city);
  };

  return (
    <div className="container">
      <h1 className="text-center py-4">Users</h1>
      {loading && (
        <div className="w-100% text-center">
        <img
          src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
          alt="loading"
          height={100}
        />
        </div>
      )}
      {error && (
        <div className="w-100% text-center">
        <h2 className="text-danger"><strong>{error}</strong></h2>
        </div>
      )}
      <div className="d-flex gap-2 flex-wrap justify-content-around">
        {!error && users.map(
          (
            {
              id,
              username,
              firstName,
              lastName,
              email,
              image,
              address: { city },
            },
            i
          ) => (
            <UserCard
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              username={username}
              email={email}
              image={image}
              city={city}
              onClick={() => {
                handleShowWeather(i);
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Users;
