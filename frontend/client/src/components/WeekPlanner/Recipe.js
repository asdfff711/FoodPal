// Recipe Component for the Day
import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

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
  return (<Draggable draggableId={props.name} index={props.index}>
      {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {props.name}
          </Container>
        )}
  </Draggable>);
};

export default Recipe;
