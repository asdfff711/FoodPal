import React from "react";
import MealPlanner from "./components/WeekPlanner/MealPlanner";
import RecipeList from "./components/WeekPlanner/RecipeList";
import { DragDropContext } from "react-beautiful-dnd";
import Landing from './page/Landing';
import styled from "styled-components";
import Header from "./components/layout/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      <Router>
      <Header color={"transparent"} />
      <Landing/>
      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <MealPlanner />
          <RecipeList />
        </Container>
      </DragDropContext> */}
      </Router>
    </div>
  );
};

export default App;
