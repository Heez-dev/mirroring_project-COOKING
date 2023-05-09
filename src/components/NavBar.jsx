import React from 'react'
import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


import '../css/nav.css'


import DataContext from '../context/DataContext'


export default function NavBar() {
  const {userstate, useraction} = useContext(DataContext);
  const location = useLocation();


  const logout = () => {
    useraction.setUser((prevUser)=>({
      userID: "",
      userPW: "",
      userName: "",
      userBirth: "",
      userGender: "",
      userEmail: "",
      userAddress: "부산광역시 연제구 연산동 1000",
      userPhone: "",
      login: false,
      scraplist: [],
      likelist: [],
      writelist:[]
    }));
  }

  return (
    <nav className='nav_wrap'>
      <div className='nav'>
        <NavLink to='/'><div className='logo'></div></NavLink>

        <ul className='nav_list_wrap'>
          <li>
            <NavLink to='/recipe/all' className={({isActive})=>(isActive? "active" : "")}>
              <div className='nav_list'>레시피</div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/town/mart' className={({isActive})=>(isActive? "active" : "")}>
              <div className='nav_list'>우리동네</div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/class' className={({isActive})=>(isActive? "active" : "")}>
              <div className='nav_list'>클래스</div>
            </NavLink>
          </li>
          <li className='user_icon_wrap'>
            <NavLink 
              to={
                userstate.user.login 
                ? `/mypage/${userstate.user.userID}`
                : '/signin'
              } 
              className={({isActive})=>(isActive? "active" : "")}
            >
              <div className='user_icon'>
                <div className={`${location.pathname.includes('/mypage') ? 'active' : ''}`}></div>
              </div>
            </NavLink>
            {
              userstate.user.login &&
              (<ul className='nav_sub_list'>
                <li><NavLink to='/' onClick={logout}>로그아웃</NavLink></li>
                <li><NavLink to={`/mypage/${userstate.user.userID}`}>회원정보</NavLink></li>
                <li><NavLink to={`/mypage/myrecipe/${userstate.user.userID}`}>마이레시피</NavLink></li>
                <li><NavLink to={`/mypage/recipebook/${userstate.user.userID}`}>레시피북</NavLink></li>
              </ul>)
            }
            
          </li>
        </ul>
      </div>
    </nav>
  )
}
