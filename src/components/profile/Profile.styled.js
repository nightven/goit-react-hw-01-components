import { styled } from "styled-components";

export const Card = styled.div`

flex-direction: column;
    width: 320px;
    
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0px;
    border: 1px  solid black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        gap:12px;
        margin-bottom: 20px;
        margin: 20px auto;
        
        p{
            color:gray;
        margin: 0
    }
        .name{
            color: black;
            font-size:24px;
        }
        
        
    }
`
export const Photo = styled.img`
display: block;
width: 150px;
border-radius: 50%;
margin-bottom: 20px;
border: 1px solid gray;
`

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;

list-style-type: none;
margin:0;
padding: 0;

li{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 80px;
    gap:8px;
    flex-basis: calc(100% / 3 );
    border: 1px solid RGBA(40,101,255,0.43);
    border-radius: 10px;
    background-color: RGBA(40,101,255,0.32);
    span{
        &:first-child{
            color: gray;
        }
    }
}
`