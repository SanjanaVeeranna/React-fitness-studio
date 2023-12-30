import React, { useEffect, useState } from "react";
import getUpperBodyData from '../services/useUpperBody';
import '../Styles/UseCard.css';

const UpperBody = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const userData = await getUpperBodyData();
      setUsers(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="m-5 d-flex justify-content-between">
      {users.map((user) => (
        <div className="use-card border hover-shadow p-2" key={user.id}>
          <div>
            {user.first_name} {user.last_name}
          </div>
          <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
          <div>
            {user.email}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpperBody;
