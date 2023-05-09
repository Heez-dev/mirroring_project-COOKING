
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext';

export default function SearchWrite({scrollPosition}) {
  const navigate = useNavigate();
  const { userstate } = useContext(DataContext);
  const user = userstate.user

  const onClickWriteBtn = () => {
    if ( user.login ) {
      navigate('/recipe/write')
    } else {
      if ( window.confirm("로그인이 필요합니다. 로그인하시겠습니까?") ) {
        navigate('/signin')
      }
    }
  };
  
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
            onClick={onClickWriteBtn}
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
