import styled from "styled-components";

export const BgContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #063970,#76b5c5);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  margin: 20px auto;
  width: max-content;
`;

export const Cell = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || "lightgray"}; 
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  border-radius:8px;
`;


