import React from "react";

function Friends(props) {
  // const {age, email, id, name} = friend;
  console.log(props);

  return <div>{props.friends.map(friend => ({ friend }))}</div>;
  // return <div>hello</div>;
}

export default Friends;
