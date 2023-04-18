import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function SignUpForm() {
  const navigate = useNavigate();

  // 아이디 정규식
  const idRegEx = /^[a-z0-9]([-_.]?[a-z0-9]){8,12}$/

  // 패스워드 정규식
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/

  // 생년월일 입력 
  let month = new Array (12);
  month.fill(0);
  let date = new Array(31);
  date.fill(0);

  // 이메일 정규식
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  return (
    <div className='sign_up_form'>
      <Link to='/'><div className='sign_logo'></div></Link>
      <form 
        action=""
        onSubmit={(e)=>{
          e.preventDefault()
          navigate('/')
        }}
      >
        <div className='user'>
          <div className='user_id'>
            <p><label htmlFor="">아이디</label></p>
            <ul>
              <li><input type="text" required/></li>
              <li><p className='confirmbtn'>중복확인</p></li>
            </ul>
          </div>
          <span className='hidden'>아이디는 영문 소문자, 숫자를 혼합하여 8~12자로 입력해 주세요</span>
          <div className='user_pw'>
            <p><label htmlFor="">비밀번호</label></p>
            <div className='pw'>
              <input type="password" required/>
              <div className='padlock'></div>
            </div>
            <p><label htmlFor="">비밀번호 재확인</label></p> 
            <div className='pw'>
              <input type="password" required/>
              <div className='padlock'></div>
            </div>
          </div>
          <span className='hidden'>비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해 주세요</span>
        </div>
        <div className='user_info'>
          <p><label htmlFor="">이름</label></p>
          <input type="text" required/>
          <p><label htmlFor="">생년월일</label></p>
          <div className='user_birth'>
            <input type="text" placeholder='연도(4자)' required/>
            <select name="month" required>
              <option value='' selected>월</option>
              {
                month.map( (f, i) => (
                  <option value="{i+1}">{i+1}</option>
                ) ) 
              }
            </select>
            <select name="date" required>
              <option value='' selected>일</option>
              {
                date.map( (f, i) => (
                  <option value="{i+1}">{i+1}</option>
                ) ) 
              }
            </select>
          </div>
          <p><label htmlFor="">성별</label></p>
          <div className='user_gender'>
            <select name="gender" className='gender' required>
              <option value="선택 안 함">선택 안 함</option>
              <option value="남">남</option>
              <option value="여">여</option>
            </select>
            <p><label htmlFor="">이메일</label></p>
            <input type="text" required/>
            <p><label htmlFor="">주소</label></p>
            <div className='user_address'>
              <ul>
                <li><input type="text" required/></li>
                <li><p className='confirmbtn'>주소찾기</p></li>
              </ul>
                <input type="text" placeholder='상세주소를 입력해 주세요' required/>
            </div>
            <p><label htmlFor="">휴대전화</label></p>
            <div className='user_phone'>
              <ul>
                <li><input type="text" required/></li>
                <li><p className='confirmbtn'>인증번호 받기</p></li>
              </ul>
              <input type="text" placeholder='인증번호를 입력해 주세요' required/>
            </div>
            <span className='hidden'>인증번호를 입력하면 가입하기 버튼이 활성화됩니다</span>
          </div>
        </div>
        <input type="submit" value="가입하기" />
      </form>
    </div>
  )
}
