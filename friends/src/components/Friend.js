import React from "react";

const Friend = props => {
  const { age, email, id, name } = props.friend;
  console.log(props.friend);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Friend;
