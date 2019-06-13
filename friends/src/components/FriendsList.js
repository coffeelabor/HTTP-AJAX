import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  // const {age, email, id, name} = friend;
  return (
    <div>
      {props.friends.map(friend => (
        <Friend key={props.friends.id} friend={friend} />
      ))}
    </div>
  );
};

// function FriendsList(props) {
//   // const {age, email, id, name} = friend;
//   console.log(props);

//   return <div>{props.friends.map(friend => ({ friend }))}</div>;
//   // return <div>hello</div>;
// }

export default FriendsList;
