import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TownMapMenuBar() {
  return (
    <div className='topmenubar'>
      <ul className='town_btns'>
        <li className='town_btn'>
          <NavLink 
            to='/town/mart'
            className={({isActive}) => isActive ? "town_btn_active" : "town_btn_inactive"}
          >
            마트
          </NavLink>
        </li>
        <li className='town_btn'>
          <NavLink 
            to='/town/market'
            className={({isActive}) => isActive ? "town_btn_active" : "town_btn_inactive"}
          >
            시장
          </NavLink>
        </li>
        <li className='town_btn'>
          <NavLink 
            to='/town/shop'
            className={({isActive}) => isActive ? "town_btn_active" : "town_btn_inactive"}
          >
            반찬가게
          </NavLink>
        </li>
        <li className='town_btn'>
          <NavLink 
            to='/town/class'
            className={({isActive}) => isActive ? "town_btn_active" : "town_btn_inactive"}
          >
            요리학원
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
