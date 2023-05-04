import React from 'react'

export default function MainEventsComp() {
  const TownEventImg = ["town2.jpg", "town3.jpg", "town4.jpg"];
  const classEventImg = ["class1.jpg", "class3.jpg", "class4.jpg"];

  return (
    <div className='mainevents'>
      <section className='maineventsbox'>
        <div className='main_town_events'>
          <div className='titleandbtn'>
            <h3># 우리동네 이벤트</h3>
            <button className='more_btn'>더보기</button>
          </div>
          <ul className='main_events_imglist'>
            {
                TownEventImg.map((img)=>(
                  <li key={img}>
                    <img 
                      src={require(`../img/slide/${img}`)}
                      alt={`slide-${img}`}
                      className='img'
                    />
                  </li>
                ))
              }
          </ul>
        </div>
        <div className='main_class_events'>
          <div className='titleandbtn'>
            <h3># 클래스 이벤트</h3>
            <button className='more_btn'>더보기</button>
          </div>
          <ul className='main_events_imglist'>
            {
              classEventImg.map((img)=>(
                <li key={img}>
                  <img 
                    src={require(`../img/slide/${img}`)}
                    alt={`slide-${img}`}
                    className='img'
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </div>
  )
}
