import React from "react";
import DayPanel from "./DayPanel";
import { connect } from "react-redux";

const MealPlanner = ({ days }) => {
  return (
    <div>
      <h1>MealPlanner</h1>
      <div>
        {Object.keys(days).map(date => (
          <DayPanel date={date} meallist={date.meallist} day={date.day}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  days: state.mealplan
});

// Action creators
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);
