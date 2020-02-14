import React from "react";
import DayPanelSegment from "./DayPanelSegment";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const DayPanel = props => {
  const { day, date, mealList } = props;

  return (
    <Container>
      <h1>{day}</h1>
      <h2>{date}</h2>
      <Droppable>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {mealList.map(item => (
              <DayPanelSegment name={item.name} image={item.image} />
            ))}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default DayPanel;
