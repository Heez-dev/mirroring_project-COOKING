import React from 'react'
import RandomRecipe from '../components/RandomRecipe'
import SearchWrite from '../components/SearchWrite'
import BestRecipe from '../components/BestRecipe'
import MainEvents from '../components/MainEvents'
import Footer from '../components/Footer'



export default function Main() {
  return (
    <div>
      <main>
        <RandomRecipe/>
        <SearchWrite/>
        <BestRecipe/>
        <MainEvents/>
      </main>
    </div>
  )
}
