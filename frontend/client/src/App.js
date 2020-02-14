import React from 'react';
import MealPlanner from './components/WeekPlanner/MealPlanner';
import RecipeList from './components/WeekPlanner/RecipeList';

const App = () => {
  return (
    <div>
      <MealPlanner />
      <RecipeList />
    </div>
  )
}

export default App;
