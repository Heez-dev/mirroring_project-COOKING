import React, { useEffect } from 'react'
import TownEventSliderComp from '../components/TownEventSliderComp';
import TownCommunityComp from '../components/TownCommunityComp';
import TownMapComp from '../components/TownMapComp';


export default function Town() {
  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div className='town_page'>
      <TownEventSliderComp/>
      <TownCommunityComp/>
      <TownMapComp/>
    </div>
  )
}
