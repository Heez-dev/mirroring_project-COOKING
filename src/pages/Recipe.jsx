import React from 'react'
import { Outlet } from 'react-router-dom'

import BestRecipe from '../components/BestRecipe'
import RecipeMenuBar from '../components/RecipeMenuBar'



export default function Recipe() {
  return (
    <div>
      <main>
        <BestRecipe/>
        <RecipeMenuBar/>
        <Outlet/>
      </main>
    </div>
  )
}
