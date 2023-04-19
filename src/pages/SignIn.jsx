import React from 'react'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


import DataContext from '../context/DataContext';


export default function SignIn() {
  const navigate = useNavigate();

  const {state,action} = useContext(DataContext);

  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  const onSignIn = (e) => {
    e.preventDefault();
    const newUser = {
      userID: userID,
      userPW: userPW,
      login: true
    };
    action.setUser(newUser);
    navigate('/');
    console.log(`아이디 : ${newUser.userID}, 비밀번호 : ${newUser.userPW}, 로그인 : ${newUser.login}`);
  }

  return (
    <div className='sign_in'>
      <Link to='/'><div className='sign_logo'></div></Link>
      <form action=""
        onSubmit={onSignIn}
      >
        <input 
          type="text" 
          placeholder='아이디를 입력해 주세요'
          required
          onChange={(e)=>{setUserID(e.target.value);}}
        />
        <input 
          type="password"
          placeholder='비밀번호를 입력해 주세요'
          required
          onChange={(e)=>{setUserPW(e.target.value)}}
        />
        <input 
          type="submit" 
          value="로그인" 
        />
      </form>
      <div className='sign_in_link'>
        <Link><span>아이디 찾기</span></Link>
        <span>￨</span>
        <Link><span>비밀번호 찾기</span></Link>
        <span>￨</span>
        <Link to='/signup/agreement'><span>회원가입</span></Link>
      </div>
    </div>
  )
}
