import React from "react";

export const List = ({ userArg }) => {
  return (
    <div>
      <ul>
        {userArg.map((itme, i) => (
          <li>{itme}</li>
        ))}
      </ul>
    </div>
  );
};
