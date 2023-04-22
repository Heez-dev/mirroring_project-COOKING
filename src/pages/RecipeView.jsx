import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext';



export default function RecipeView() {
  const { recipeid, title, category } = useParams();

  const { state } = useContext(RecipeContext);
  const recipelist = state.recipelist;

  const recipeView = recipelist.find( (s) => (s.recipeid === recipeid) )
  
  return (
    <div>
      {recipeView.title}
    </div>
  )
}
