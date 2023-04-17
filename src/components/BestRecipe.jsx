import React from 'react'

export default function BestRecipe() {
  return (
    <div>
      <section className='best _recipe'>
          <div className='best_recipe_title'>
            <h3># 베스트 레시피</h3>
          </div>
          <div className='best_cards'>
            <div className='best_card'>
              <div className='best_img'>
                card image
              </div>
              <h4 className='best_ranking'>01</h4>
              <button className='best_heart_btn'>하트아이콘</button>
              <h4 className='best_title'>메뉴이름</h4>
            </div>
          </div>
          <div className='slide_btn_small '>
            슬라이드버튼
          </div>
        </section>
    </div>
  )
}
