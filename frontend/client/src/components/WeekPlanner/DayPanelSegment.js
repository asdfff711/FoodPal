import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  margin: 2px;
  border: 1px solid lightgray;
  /* width: 220px; */
  display: flex;
  flex-direction: column;
  min-height: 80px;
  width: 200px;
`;

const DaySegmentTitle = styled.h4`
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin-left: 10px;
`;

const RecipeList = styled.div`
  margin:2px;
  margin-right: 10px;
  text-align: center;
`;

const Recipe = styled.div`
  margin: 2px;
  border: 1px solid lightgray;
`;
const DayPanelSegment = props => {
  const mealList = props.days[props.date].mealtask;
  const recipeList = mealList.filter( (meal) => meal.name === props.name)[0].recipes

  return (
    <Container>
      <DaySegmentTitle>{props.name}</DaySegmentTitle>
      <RecipeList>
        {recipeList.map( ( recipe) => (<Recipe key={props.date+recipe}>{recipe}</Recipe>))}
      </RecipeList>
    </Container>
  );
};

const mapStateToProps = state => ({
  days: state.mealplan
});

export default connect(mapStateToProps,null)(DayPanelSegment);
