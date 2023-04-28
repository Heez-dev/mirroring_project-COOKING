import React, { useContext, useState } from 'react'
import RecipeContext from '../context/RecipeContext'
import { useEffect } from 'react';

export default function RandomRecipe() {
  const {state} = useContext(RecipeContext);
  const recipelist = state.recipelist;

  const main = recipelist.filter((recipe) => recipe.category === "main");
  const side = recipelist.filter((recipe) => recipe.category === "side");
  const soup = recipelist.filter((recipe) => recipe.category === "soup");

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeButton, setActiveButton] = useState('');

  const randomValueFromArray = (array, category) => {
    const random = Math.floor(Math.random() * array.length);
    setSelectedRecipe(array[random]);
    setActiveButton(category);
  };

  useEffect(()=>{
    randomValueFromArray(main);
  },[]);


  return (
    <div className='random_recipe'>
      <div className='random_recipe_back_wrap'>
        <div className='random_recipe_back'>
          <div className='random_textandbtn'>
            <div className='random_text'>
              <h3>오늘은 뭐 먹지?</h3>
              <p>쿠킹이 추천하는 랜덤 레시피</p>
            </div>
            <div className='random_btn'>
              <button 
                onClick={()=>{randomValueFromArray(main, "main")}}
                className={activeButton === 'main' ? 'active' : ''}
              >
                메인음식
              </button>
              <button 
                onClick={()=>{randomValueFromArray(side, "side")}}
                className={activeButton === 'side' ? 'active' : ''}
              >
                곁들임음식
              </button>
              <button 
                onClick={()=>{randomValueFromArray(soup, "soup")}}
                className={activeButton === 'soup' ? 'active' : ''}
              >
                국/찌개
              </button>
            </div>
          </div>
          {
            selectedRecipe && (
              <div className='random_title'>
                <p>{selectedRecipe.subtitle},</p>
                <h5>{selectedRecipe.title}</h5>
              </div>
            )
          }
        </div>
      </div>
      <div className='random_recipe_result'>
        {selectedRecipe && (
          <div>
            <div
              className="random_img"
              style={{ backgroundImage: `url(${selectedRecipe.img})` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}
