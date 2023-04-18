import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignIn() {
  return (
    <div className='sign_in'>
      <Link to='/'><div className='sign_logo'></div></Link>
      <form action=""
        onClick={(e)=>{
          e.preventDefault();
          navigator('/');
        }}
      >
        <input 
          type="text" 
          placeholder='아이디를 입력해 주세요'
          required
        />
        <input 
          type="password"
          placeholder='비밀번호를 입력해 주세요'
          required
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
        <Link to='/signup_agreement'><span>회원가입</span></Link>
      </div>
    </div>
  )
}
