import React from 'react'
import { NavLink } from 'react-router-dom'


import '../css/nav.css'

export default function Nav() {
  return (
    <nav className='nav'>
      <NavLink to='/'><div className='logo'></div></NavLink>
      <ul className='nav_list_wrap'>
        <li><NavLink to='/recipe'><div className='nav_list'>레시피</div></NavLink></li>
        <li><NavLink to='/town'><div className='nav_list'>우리동네</div></NavLink></li>
        <li><NavLink to='/class'><div className='nav_list'>클래스</div></NavLink></li>
        <li className='user_icon_wrap'>
          <NavLink to='/mypage_myrecipe'>
            <div className='user_icon'>
              <div></div>
            </div>
          </NavLink>
          <ul className='nav_sub_list'>
            <li><NavLink to='/signin'>로그인</NavLink></li>
            <li><NavLink to='/signup_agreement'>회원가입</NavLink></li>
            <li><NavLink to='/mypage_myrecipe'>마이레시피</NavLink></li>
            <li><NavLink to='/mypage_recipebook'>레시피북</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
