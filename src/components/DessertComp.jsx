import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext';


export default function DessertComp() {

  const { state } = useContext(RecipeContext);
  const category = "간식";

  return (
    <div className='recipecards_wrap'>
      {
        state.recipelist.map((recipelist, recipeid) => {
          if (recipelist.category === category) {
            return (<div key={recipeid} className='recipecard'>
            <div className='recipecard_img'>이미지</div>
            <h5 className='recipecard_title'>{recipelist.title}</h5>
            <div className='recipecard_time_wrap'>
              <div className='recipecard_time_icon'>icon</div>
              <span className='recipecard_time'>{recipelist.time}</span>
            </div>
          </div>)
          }
        } )
      }
    </div>
  )
}