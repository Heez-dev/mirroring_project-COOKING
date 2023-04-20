import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RecipeMenuBar() {
  return (
    <ul className='recipe_menu_bar'>
      <li className='recipe_menu_list'>
        <NavLink 
          to="/recipe/all" 
          className={({isActive}) => isActive ? "recipe_menu_active" : "recipe_menu_inactive"}
        >
          모두보기
        </NavLink>
      </li>
      <li className='recipe_menu_list'>
        <NavLink 
          to="/recipe/main" 
          className={({isActive}) => isActive ? "recipe_menu_active" : "recipe_menu_inactive"}
        >
          메인요리
        </NavLink>
      </li>
      <li className='recipe_menu_list'>
        <NavLink 
          to="/recipe/side" 
          className={({isActive}) => isActive ? "recipe_menu_active" : "recipe_menu_inactive"}
        >
          밑반찬
        </NavLink>
      </li>
      <li className='recipe_menu_list'>
        <NavLink 
          to="/recipe/soup" 
          className={({isActive}) => isActive ? "recipe_menu_active" : "recipe_menu_inactive"}
        >
          국/찌개
        </NavLink>
      </li>
      <li className='recipe_menu_list'>
        <NavLink 
          to="/recipe/dessert" 
          className={({isActive}) => isActive ? "recipe_menu_active" : "recipe_menu_inactive"}
        >
          간식
        </NavLink>
      </li>
    </ul>
  )
}
