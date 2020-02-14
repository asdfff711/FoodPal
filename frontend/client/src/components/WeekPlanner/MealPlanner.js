import React from "react";
import DayPanel from "./DayPanel";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  margin: 8px;
  /* border: 1px solid lightgray; */
  border-radius: 2px;
    display: flex;
  flex-direction: row;
`;

const MealPlanner = ({ days }) => {
  return (
    <div>
      <h1>MealPlanner</h1>
      <Container>
        {Object.keys(days).map( date => (
          <DayPanel key={ 'day-'+date} date={date} mealList={days[date].mealtask} day={days[date].day}/>
        ))}
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  days: state.mealplan
});

// Action creators
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);
