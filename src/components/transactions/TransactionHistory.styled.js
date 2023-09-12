import { styled } from "styled-components";

export const TransactionTable = styled.table`
display:block;
margin: 0 auto;
width: 906px;
border: 1px solid green;
border-radius:10px ;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
thead{  
    display: flex;

    tr{
        display: flex;
        justify-content: space-between;
        background-color: RGBA(40,101,255,0.32);
    }
}
th{
    display: flex;
    width:300px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid RGBA(40,101,255,0.32);
    border-radius: 10px;
    
    font-size:24px;
    font-weight: 700;

}
tbody{
display: flex;
flex-direction:column;
justify-content: center;
}
tr{
    &:nth-child(even){
        background-color:RGBA(40,101,255,0.12);
    }
}
`