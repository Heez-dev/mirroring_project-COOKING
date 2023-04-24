import React from 'react'

import ScrapBtnComp from './ScrapBtnComp'
import { useNavigate } from 'react-router-dom'


export default function RecipeCardComp({recipelist}) {
  const navigate = useNavigate();

  const onRecipeView = () => {
    navigate(`/recipe/${recipelist.recipeid}/${recipelist.category}/${recipelist.title}`)
  }

  return (
    <div key={recipelist.recipeid} className='recipecard'>
      <div>
          <div className='recipecard_img_wrap'>
            <div 
              style={{
                backgroundImage: `url(${recipelist.img})`}} 
              className='recipecard_img'

              onClick={(e)=>{onRecipeView(recipelist.recipeid)}}

            ></div>
          </div>
          <div className='recipecard_title_wrap'>
            <h5 className='recipecard_title'>{recipelist.title}</h5>
            <ScrapBtnComp recipe={recipelist}/>
          </div>
          <div className='recipecard_time_wrap'>
            <div className='recipecard_time_icon'></div>
            <span className='recipecard_time'>{recipelist.time}</span>
          </div>
        </div>
    </div>
  )
}
