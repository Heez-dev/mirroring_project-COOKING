
import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchWrite() {
  return (
    <div>
      <section className='searchandwrite'>
          <form action="" className='search_bar'>
            <input type="text" placeholder='레시피를 검색해보세요'className='search_input'/>
            <button type="submit" className='search_btn'></button>
          </form>
          <Link to='/recipe/write' className='write_btn'>
            <span className='write_text'>레시피 작성하기</span>
            <div className='write_icon'></div>
          </Link>
        </section>
    </div>
  )
}
