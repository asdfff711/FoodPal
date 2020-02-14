import React, { Component } from "react";
import Recipe from "./Recipe";

const recipeList = [
  { name: "Chicken", image: null },
  { name: "Beef", image: null },
  { name: "Pork", image: null }
];

export class RecipeList extends Component {
  render() {
    return (
      <div>
        <h2>Recipe List</h2>
        {recipeList.map(item => (
          <Recipe name={item.name} image={item.image} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
