import React from "react";
import MealPlanner from "./components/WeekPlanner/MealPlanner";
import RecipeList from "./components/WeekPlanner/RecipeList";
import { DragDropContext } from "react-beautiful-dnd";
import Landing from './page/Landing';
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  /* border: 1px solid lightgray; */
  border-radius: 2px;
  display: flex;
  flex-direction: row;
`;

const App = () => {
  const onDragEnd = (details) =>{
    console.log(details);
  }
  return (
    <div>
      <Landing/>
      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <MealPlanner />
          <RecipeList />
        </Container>
      </DragDropContext> */}
    </div>
  );
};

export default App;
