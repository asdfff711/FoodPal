import React from "react";
import DayPanel from './DayPanel';

const sampleData = {
  days: [
    {
      day: "Monday",
      date: "10/02/2020",
      mealtask: [
        { name: breakfast, recipes: [] },
        { name: lunch, recipes: [] },
        { name: dinner, recipes: [] }
      ]
    },
    {
      day: "Tuesday",
      date: "11/02/2020",
      mealtask: [
        { name: breakfast, recipes: [] },
        { name: lunch, recipes: [] },
        { name: dinner, recipes: [] }
      ]
    },
    {
      day: "Wednesday",
      date: "11/02/2020",
      mealtask: [
        { name: breakfast, recipes: [] },
        { name: lunch, recipes: [] },
        { name: dinner, recipes: [] }
      ]
    },
    {
      day: "Thursday",
      date: "11/02/2020",
      mealtask: [
        { name: breakfast, recipes: [] },
        { name: lunch, recipes: [] },
        { name: dinner, recipes: [] }
      ]
    },
    {
      day: "Friday",
      date: "11/02/2020",
      mealtask: [
        { name: breakfast, recipes: [] },
        { name: lunch, recipes: [] },
        { name: dinner, recipes: [] }
      ]
    }
  ]
};

const MealPlanner = () => {
  const [Week, setWeek] = useState(sampleData);
  return (
    <div>
      <h1>MealPlanner</h1>
      {Week.map(day => {
          <DayPanel/>
      })}
    </div>
  );
};

const mapStateToProps = {

}

// Action creators
const mapDispatchToProps = {

}

export default connect(MealPlanner);
