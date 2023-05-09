import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BestRecipeComp from '../components/BestRecipeComp'
import RecipeMenuBar from '../components/RecipeMenuBar'
import TopBtnComp from '../components/TopBtnComp';



export default function Recipe() {
  useEffect(()=>{window.scrollTo({top: 0})},[]);

  return (
    <div>
      <main>
        <BestRecipeComp/>
        <TopBtnComp/>
        <RecipeMenuBar/>
        <Outlet/>
      </main>
    </div>
  )
}
