import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


import '../css/nav.css'


import DataContext from '../context/DataContext'


export default function NavBar() {
  const {state, action} = useContext(DataContext)

  const logout = () => {
    action.setUser.login(false);
  }

  return (
    <nav className='nav'>
      <NavLink to='/'><div className='logo'></div></NavLink>

      <ul className='nav_list_wrap'>
        <li><NavLink to='/recipe'><div className='nav_list'>레시피</div></NavLink></li>
        <li><NavLink to='/town'><div className='nav_list'>우리동네</div></NavLink></li>
        <li><NavLink to='/class'><div className='nav_list'>클래스</div></NavLink></li>
        <li className='user_icon_wrap'>
          <NavLink to={`/mypage/myrecipe/${state.user.userID}`}>
            <div className='user_icon'>
              <div></div>
            </div>
          </NavLink>
          <ul className='nav_sub_list'>
            <li>
              {
                state.user.login
                ? (<NavLink to='/' onClick={logout}>로그아웃</NavLink>)
                : (<NavLink to='/signin'>로그인</NavLink>)
              }
            </li>
            <li><NavLink to={`/mypage/${state.user.userID}`}>회원정보</NavLink></li>
            <li><NavLink to={`/mypage/myrecipe/${state.user.userID}`}>마이레시피</NavLink></li>
            <li><NavLink to={`/mypage/recipebook/${state.user.userID}`}>레시피북</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
