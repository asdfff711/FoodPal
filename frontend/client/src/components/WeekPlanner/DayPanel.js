import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const DayPanel = props => {
  return (
    <Container>
      <h1>{props.day}</h1>
      <h2>{props.date}</h2>
    </Container>
  );
};

export default DayPanel;
