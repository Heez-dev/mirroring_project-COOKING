import React, { useEffect } from 'react'
import TownEventSliderComp from '../components/TownEventSliderComp';
import TownCommunityComp from '../components/TownCommunityComp';
import TownMapMenuBar from '../components/TownMapMenuBar';
import { Outlet } from 'react-router-dom';
import TopBtnComp from '../components/TopBtnComp';


export default function Town() {
  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div className='town_page'>
      <TownEventSliderComp/>
      <TopBtnComp/>
      <TownCommunityComp/>
      <TownMapMenuBar/>
      <Outlet/>
    </div>
  )
}
