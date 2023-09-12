import { styled } from 'styled-components/';

export const FriendUl = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0;
  width: 320px;

  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  list-style: none;
  li {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    gap: 24px;

    height: 80px;

    border: 1px solid green;
    border-radius: 10px;
    .online {
      background-color: green;
    }
    .offline {
      background-color: red;
    }
    img{
        display:block;
        width:70px;
    }
    p{
        font-size: 20px;
        font-weight:700;
    }
  }
`;
