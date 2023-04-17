import React from 'react'

export default function RandomRecipe() {
  return (
    <div>
      <section className='random_recipe'>
          <div className='random_img'>
            background image
          </div>
          <div className='random_text'>
            <h3>오늘은 뭐 먹지?</h3>
            <p>쿠킹이 추천하는 오늘의 레시피</p>
          </div>
          <div className='random_btn'>
            <button>메뉴1</button>
            <button>메뉴2</button>
            <button>메뉴3</button>
          </div>
        </section>
    </div>
  )
}
