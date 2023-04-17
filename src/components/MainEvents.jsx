import React from 'react'

export default function MainEvents() {
  return (
    <div>
      <section className='main_events'>
          <div className='main_town_events'>
            <h3># 우리동네 이벤트</h3>
            <button className='more_btn'>더보기</button>
            <ul className='main_events_imglist'>
              <li>image</li>
              <li>image</li>
              <li>image</li>
            </ul>
          </div>
          <div className='main_class_events'>
            <h3># 클래스 이벤트</h3>
            <button className='more_btn'>더보기</button>
            <ul className='main_events_imglist'>
              <li>image</li>
              <li>image</li>
              <li>image</li>
            </ul>
          </div>
        </section>
    </div>
  )
}
