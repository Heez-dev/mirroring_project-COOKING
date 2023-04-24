import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

export default function RecipeEditForm() {
  const { recipeid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const curRecipe = location.state;

  const [title, setTitle] = useState(curRecipe.title);
  const [img, setImg] = useState(curRecipe.img);
  const [Lod, setLod] = useState(curRecipe.Lod);
  const [time, setTime] = useState(curRecipe.time);
  const [servings, setServings] = useState(curRecipe.servings);
  const [ingredient, setIngredient] = useState(curRecipe.ingredient);
  const [content, setContent] = useState(curRecipe.content);

  const value = useContext(RecipeContext);
  const {state, action} = value;

  return (
    <div>{title} 수정 페이지</div>
  )
}
