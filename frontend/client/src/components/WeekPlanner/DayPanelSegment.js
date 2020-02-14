import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2px;
  border: 1px solid lightgray;
  /* width: 220px; */ 
  display: flex;
  flex-direction: row;
  min-height: 80px;
`;

const DaySegmentTitle = styled.h4`
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin-left: 10px;
`;
const DayPanelSegment = props => {
  return (
    <Container>
      <DaySegmentTitle>{props.name}</DaySegmentTitle>
    </Container>
  );
};

export default DayPanelSegment;
