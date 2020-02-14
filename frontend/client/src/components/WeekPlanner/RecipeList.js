import React, { Component } from "react";
import Recipe from "./Recipe";
import { Droppable } from "react-beautiful-dnd";

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
        <Droppable droppableId={'droppable-recipe-list'}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {recipeList.map((item, index) => (
                <Recipe
                  name={item.name}
                  image={item.image}
                  key={item.name}
                  index={index}
                />
              ))}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default RecipeList;
