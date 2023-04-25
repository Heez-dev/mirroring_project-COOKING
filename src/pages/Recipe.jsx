import React from 'react'
import { Outlet } from 'react-router-dom'

import BestRecipeComp from '../components/BestRecipeComp'
import RecipeMenuBar from '../components/RecipeMenuBar'



export default function Recipe() {
  return (
    <div>
      <main>
        <BestRecipeComp/>
        <RecipeMenuBar/>
        <Outlet/>
      </main>
    </div>
  )
}
