import React, { useContext, useEffect, useState } from 'react'
import RandomRecipe from '../components/RandomRecipe'
import SearchWrite from '../components/SearchWrite'
import BestRecipeComp from '../components/BestRecipeComp'
import MainEvents from '../components/MainEvents'

import DataContext from '../context/DataContext'
import TopBtnComp from '../components/TopBtnComp'


export default function Main() {
  const {userstate} = useContext(DataContext);
  console.log(userstate.login);

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(()=>{
    window.addEventListener("scroll", updateScroll);
    window.scrollTo({top: 0})
  },[]);

  return (
    <div className='mainpage'>
      <RandomRecipe/>
      <SearchWrite scrollPosition={scrollPosition}/>
      <TopBtnComp/>
      <BestRecipeComp/>
      <MainEvents/>
    </div>
  )
}
