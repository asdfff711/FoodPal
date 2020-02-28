import {
  ADD_RECIPE_TO_DAY,
  REMOVE_RECIPE_FROM_DAY
} from "../actions/MealPlanner/actionTypes";

const initialState = {
  "10/02/2020": {
    day: "Monday",
    mealtask: [
      { name: "breakfast", recipes: ['Chicken'] },
      { name: "lunch", recipes: [] },
      { name: "dinner", recipes: [] },
      { name: "snack", recipes: [] }
    ]
  },
  "11/02/2020": {
    day: "Tuesday",
    mealtask: [
      { name: "breakfast", recipes: [] },
      { name: "lunch", recipes: [] },
      { name: "dinner", recipes: [] },
      { name: "snack", recipes: [] }
    ]
  },
  "12/02/2020": {
    day: "Wednesday",
    mealtask: [
      { name: "breakfast", recipes: [] },
      { name: "lunch", recipes: [] },
      { name: "dinner", recipes: [] },
      { name: "snack", recipes: [] }
    ]
  },
  "13/02/2020": {
    day: "Thursday",
    mealtask: [
      { name: "breakfast", recipes: [] },
      { name: "lunch", recipes: [] },
      { name: "dinner", recipes: [] },
      { name: "snack", recipes: [] }
    ]
  },
  "14/02/2020": {
    day: "Friday",
    mealtask: [
      { name: "breakfast", recipes: [] },
      { name: "lunch", recipes: [] },
      { name: "dinner", recipes: [] },
      { name: "snack", recipes: [] }
    ]
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_RECIPE_TO_DAY: {
      const { date, mealtask, recipe } = payload;

      // Copy contents of a day
      const oldDay = JSON.parse(JSON.stringify(state.date));

      // Add in new recipe information
      let newMeal = oldDay.date.mealtask.filter(
        meal => meal.name === mealtask
      )[0];
      newMeal.recipes.push(recipe);

      const mealtaskIndex = oldDay.date.mealTask.findIndex(
        meal => meal.name === mealtask
      );
      oldDay.mealtask.splice(mealtaskIndex, 1);
      oldDay.mealtask.splice(mealtaskIndex, 0, newMeal);

      const newState = {
        ...state,
        [date]: [oldDay]
      };
      console.log("Updated state from ADD_RECIPE_TO_DAY");
      console.log(newState);
      return newState;
    }
    // TODO
    case REMOVE_RECIPE_FROM_DAY:
    default:
      return {
        ...state
      };
  }
}
