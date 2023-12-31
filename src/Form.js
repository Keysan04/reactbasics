import React, { useState } from "react";

export const Form = ({ addUser }) => {
  const [user, setUser] = useState("Prem");

  // Controlled method
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUser(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //uplift the props
    addUser(user);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} action="" className="user-form">
        <p>{user}</p>
        <input onChange={handleOnChange} type="text" />
        <button>Add User</button>
      </form>
    </div>
  );
};
