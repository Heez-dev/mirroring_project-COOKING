import React, { useContext } from 'react'
import RandomRecipe from '../components/RandomRecipe'
import SearchWrite from '../components/SearchWrite'
import BestRecipeComp from '../components/BestRecipeComp'
import MainEvents from '../components/MainEvents'

import DataContext from '../context/DataContext'


export default function Main() {
  const {userstate} = useContext(DataContext);
  console.log(userstate.login)
  return (
    <div>
      <main>
        <RandomRecipe/>
        <SearchWrite/>
        <BestRecipeComp/>
        <MainEvents/>
      </main>
    </div>
  )
}
