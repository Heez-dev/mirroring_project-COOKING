import React, { useEffect } from 'react'
import TownEventSliderComp from '../components/TownEventSliderComp';
import TownCommunityComp from '../components/TownCommunityComp';
import TownMapComp from '../components/TownMapComp';
import TownMapMenuBar from '../components/TownMapMenuBar';
import { Outlet } from 'react-router-dom';


export default function Town() {
  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div className='town_page'>
      <TownEventSliderComp/>
      <TownCommunityComp/>
      <TownMapMenuBar/>
      <Outlet/>
    </div>
  )
}
