import { Circle } from "./FriendListItem.styled";



export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Circle className={isOnline? "online": "offline"}></Circle>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

