
import React from 'react'

export default function SearchWrite() {
  return (
    <div>
      <section className='search&write'>
          <form action="" className='search_bar'>
            <input type="text" placeholder='레시피를 검색해보세요'className='search_input'/>
            <input type="submit" value="돋보기아이콘" className='search_btn'/>
          </form>
          <div>
            <button className='write_btn'>레시피 작성하기</button>
          </div>
        </section>
    </div>
  )
}
