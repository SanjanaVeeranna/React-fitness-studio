import React, { useEffect, useState } from "react";
import getUpperBodyData from '../services/useUpperBody';
import '../Styles/UseCard.css';

const UpperBody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUpperBodyData();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="m-5 d-flex justify-content-between">
      {users.map((user) => (
        <div className="use-card border align-items-center hover-shadow p-2">
          <div className="text-center">
            {user.first_name} {user.last_name}
          </div>
          <img src={user.avatar} alt={`${user.first_name}'s avatar`} className="d-flex align-items-center justify-content-center" />
          <div className="text-center">
            {user.email}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpperBody;
