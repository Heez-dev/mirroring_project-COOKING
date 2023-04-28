
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SearchWrite({scrollPosition}) {
  const navigate = useNavigate();
  
  return (
    <div>
      <section className='searchandwrite'>
          <form 
            action="" 
            className= {
              scrollPosition > 99 ? "search_bar_onscroll" : ""
              + ' search_bar'
            }
          >
            <input type="text" placeholder='레시피를 검색해보세요'className='search_input'/>
            <button type="submit" className='search_btn'></button>
          </form>
          <button 
            className= {
              scrollPosition > 99 ? "write_btn_onscroll" : ""
              + " write_btn"
            }
            onClick={()=>{navigate('/recipe/write')}}
          >
            <div className='animated'>
              <span className='content'>
                레시피 작성하기
                <img src={require('../img/icon/write.png')} alt="" />
              </span>
              <span className='content'>
                레시피 작성하기
                <img src={require('../img/icon/write.png')} alt="" />
              </span>
              <span className='content'>
                레시피 작성하기 
                <img src={require('../img/icon/write.png')} alt="" />
              </span>
              <span className='content'>
                레시피 작성하기
                <img src={require('../img/icon/write.png')} alt="" />
              </span>
              <span className='content'>
                레시피 작성하기
                <img src={require('../img/icon/write.png')} alt="" />
              </span>
            </div>
          </button>
        </section>
    </div>
  )
}
