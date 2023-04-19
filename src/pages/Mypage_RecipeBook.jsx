import React from 'react'
import { useParams } from 'react-router-dom'


export default function Mypage_RecipeBook() {
  const {userID} = useParams();

  return (
    <div>
      <p>현재 화면은 {userID}의 레시피북 페이지 입니다</p>
    </div>
  )
}
