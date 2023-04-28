import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function Mypage_MyRecipe() {
  const {userID} = useParams();
  
  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div>
      <p>현재 화면은 {userID}의 마이레시피 페이지 입니다</p>
    </div>
  )
}
