import { FriendListItem } from "components/friendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { FriendUl } from "./FriendList.styled";

export const FriendList = ({ friends }) => (
  <FriendUl className="friend-list">
    {friends.map(friend => {
      return (
        <li key={friend.id}>
            
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      );
    })}
  </FriendUl>
);

FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
    
}