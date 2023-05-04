import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function User() {
  const {userID} = useParams();

  useEffect(()=>{window.scrollTo({top: 0})},[]);

  return (
    <div style={{marginTop: "70px"}}>
      <p>현재 화면은 {userID}의 회원정보 페이지 입니다</p>
      <h3>환영합니다 {userID}님</h3>
    </div>
  )
}
