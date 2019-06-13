import React from "react";

const Friend = props => {
  const { age, email, id, name } = props.friend;
  console.log(props.friend);
  return (
    <div className="friend-container">
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Friend;
