import React, { useEffect, useState } from "react";

const Sidebar = ({ user, setUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="sidebar">
      <h2>P2P</h2>

      <p className="username">{user.name}</p>
      <p className="role">{user.role}</p>

      <hr />

      <h4>Switch User</h4>

      {users.map((u) => (
        <button
          key={u.id}
          className="user-btn"
          onClick={() => setUser(u)}
        >
          {u.name} ({u.role})
        </button>
      ))}

      
    </div>
  );
};

export default Sidebar;
