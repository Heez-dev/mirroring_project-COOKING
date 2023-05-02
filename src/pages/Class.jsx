import React, { useEffect } from 'react'
import ClassEventSliderComp from '../components/ClassEventSliderComp';


export default function Class() {
  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div>
      <ClassEventSliderComp/>
    </div>
  )
}