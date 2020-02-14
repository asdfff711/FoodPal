import { ADD_RECIPE_TO_DAY, REMOVE_RECIPE_FROM_DAY } from './actionTypes';

export const addRecipe = ({date, mealtask, recipe}) => (
    // Anything meaningful here, then action type with payload afterwards   
    {
        type: ADD_RECIPE_TO_DAY,
        payload: {
            date,
            mealtask,
            recipe,
        }
    }
)

export const deleteRecipe = ({date, mealtask, recipe}) =>(
    {
        type: REMOVE_RECIPE_FROM_DAY,
        payload: {
            date,
            mealtask,
            recipe,
        }
    }
)