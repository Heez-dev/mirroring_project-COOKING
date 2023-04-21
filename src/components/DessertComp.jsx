import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext';
import { Link } from 'react-router-dom';


import ScrapBtnComp from './ScrapBtnComp';



export default function DessertComp() {

  const { state } = useContext(RecipeContext);
  const category = "간식";

  return (
    <div className='recipecards_wrap'>
      {
        state.recipelist.map((recipelist, recipeid) => {
          if (recipelist.category === category) {
            return (<Link key={recipeid} className='recipecard'>
            <div className='recipecard_img_wrap'>
                <div style={{backgroundImage: `url(${recipelist.img})`}} className='recipecard_img'></div>
            </div>
            <div className='recipecard_title_wrap'>
              <h5 className='recipecard_title'>{recipelist.title}</h5>
              <ScrapBtnComp recipe={recipelist}/>
            </div>
            <div className='recipecard_time_wrap'>
              <div className='recipecard_time_icon'></div>
              <span className='recipecard_time'>{recipelist.time}</span>
            </div>
          </Link>)
          }
        } )
      }
    </div>
  )
}