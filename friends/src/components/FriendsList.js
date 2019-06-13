import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  // const {age, email, id, name} = friend;
  return (
    <div>
      {props.friends.map((friend, i) => (
        <Friend key={i} friend={friend} />
      ))}
    </div>
  );
  // return <div>hello</div>;
};

// function FriendsList(props) {
//   // const {age, email, id, name} = friend;
//   console.log(props);

//   return <div>{props.friends.map(friend => ({ friend }))}</div>;
//   // return <div>hello</div>;
// }

export default FriendsList;
