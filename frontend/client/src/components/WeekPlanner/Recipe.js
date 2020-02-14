// Recipe Component for the Day
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2px;
  border: 1px solid lightgray;
  /* width: 220px; */ 
  display: flex;
  flex-direction: row;
  min-height: 40px;
  justify-content: center;
  align-items: center;
`;

const Recipe = props => {
  return <Container>{props.name}</Container>;
};

export default Recipe;
