
import { getRandomColor } from "components/utils/RandomColor";
import { styled } from "styled-components";


export const StatisticsSection = styled.section`
display:flex;
flex-direction: column;
width:320px;
margin: 0 auto;
margin-bottom: 40px;
border: 1px solid black;
border-radius: 10px;
overflow: hidden;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 60px;
}
.stat-list{
    display: flex;
    list-style-type: none;
    padding: 0;
    margin:0;
   
}
`
export const List = styled.li`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0;
        flex-basis: calc(100% / 5);
        height: 60px;
        align-items: center;
        justify-content:center;

        border: 1px solid black;
        border-radius: 10px;
        background-color: ${getRandomColor};
        color: white;
        
        font-size: 22px;
        span{

            &:first-child{
                font-size:14px;
            }
        }

    `