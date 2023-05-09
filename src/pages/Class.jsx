import React, { useEffect } from 'react'
import ClassEventSliderComp from '../components/ClassEventSliderComp';
import { FaStar } from 'react-icons/fa';
import TopBtnComp from '../components/TopBtnComp';


export default function Class() {
  const onedayClasslist = [
    {
      OCid : 1,
      img : "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      place: "부산광역시 부산진구",
      title: "클래식 쿠킹 클래스",
      detail: "(파스타/리조또)",
      score: 4,
      review: 265,
      price: 40000
    },
    {
      OCid : 2,
      img : "https://images.unsplash.com/photo-1665157136739-fa94e14deb33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      place: "부산광역시 부산진구",
      title: "스콘 16~20개 만들기",
      detail: "(플레인/커피초코칩)",
      score: 5,
      review: 519,
      price: 50000
    },
    {
      OCid : 3,
      img : "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      place: "부산광역시 해운대구",
      title: "수제도우로 피자 만들기",
      detail: "(불고기/페퍼로니 택 1)",
      score: 4,
      review: 165,
      price: 50000
    },
    {
      OCid : 4,
      img : "https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      place: "부산광역시 수영구",
      title: "놀면서 수제맥주 만들기",
      detail: "(맥주 만들기/시음)",
      score: 5,
      review: 874,
      price: 50000
    }
  ];

  const regularClasslist = [
    {
      RCid: 1,
      img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      place: "부산광역시 부산진구",
      title: "베이킹의 모든 것",
      detail: "(4주 과정)",
      score: 5,
      review: 27,
      price: 400000
    },
    {
      RCid: 2,
      img: "https://images.pexels.com/photos/6605903/pexels-photo-6605903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      place: "부산광역시 금천구",
      title: "푸드스타일링 베이직",
      detail: "(7주 과정)",
      score: 4,
      review: 32,
      price: 550000
    },
    {
      RCid: 3,
      img: "https://images.pexels.com/photos/2878712/pexels-photo-2878712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      place: "부산광역시 수영구",
      title: "바리스타 창업자 과정",
      detail: "(2주 과정)",
      score: 4,
      review: 15,
      price: 500000
    },
    {
      RCid: 4,
      img: "https://images.unsplash.com/photo-1562270910-b11f1965ad3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      place: "부산광역시 부산진구",
      title: "천연발효 건강빵 클래스",
      detail: "(4주 과정)",
      score: 5,
      review: 44,
      price: 220000
    },
  ]


  useEffect(()=>{window.scrollTo({top: 0})},[]);
  
  return (
    <div>
      <ClassEventSliderComp/>
      <TopBtnComp/>

      <div className='classes'>

        {/** 원데이 클래스 */}
        <div className='onedayclass'>
          <h3 className='onedayclasstitle'># 원데이 클래스</h3>
          <div className='classcardwrap'>
            {
              onedayClasslist.map( (oc) => (
                <div key={oc.OCid} className='classcard'>
                  <div className='img_wrap'>
                    <img src={oc.img} alt='이미지'/>
                  </div>
                  <div className='text_wrap'>
                    <div className='place'>
                      <div className='place_icon'></div>
                      <span className='place_text'>{oc.place}</span>
                    </div>
                    <div className='titleanddetail'>
                      <h5 className='title'>{oc.title}</h5>
                      <h6 className='detail'>{oc.detail}</h6>
                    </div>
                    <div className='scoreandreview'>
                      <div className='score_icon'>
                      {[...Array(5)].map( (star, i) => {
                        const ratingvalue = i + 1;
                        return (
                          <label key={i}>
                            <FaStar
                              color={ ratingvalue <= oc.score ? "#ffc107" : "#A4A4A4"}
                              size="15"
                            />
                          </label>
                        )} 
                      )}
                      </div>
                      <span className='review'>{oc.review}</span>
                    </div>
                    <p className='price'>{oc.price.toLocaleString()}원</p>
                  </div>
                </div>
              ) )
            }
          </div>
          <div className='pagebtns'>
            <button className='prev'></button>
            <div className='numbers'>
              <button className='number btn1'>1</button>
              <button className='number'>2</button>
              <button className='number'>3</button>
              <button className='number'>4</button>
              <button className='number'>5</button>
            </div>
            <button className='next'></button>
          </div>
        </div>

        {/** 정기 클래스 */}
        <div className='regularclass'>
          <h3 className='regularclasstitle'># 정기 클래스</h3>
          <div className='classcardwrap'>
            {
              regularClasslist.map( (rc) => (
                <div key={rc.OCid} className='classcard'>
                  <div className='img_wrap'>
                    <img src={rc.img} alt='이미지'/>
                  </div>
                  <div className='text_wrap'>
                    <div className='place'>
                      <div className='place_icon'></div>
                      <span className='place_text'>{rc.place}</span>
                    </div>
                    <div className='titleanddetail'>
                      <h5 className='title'>{rc.title}</h5>
                      <h6 className='detail'>{rc.detail}</h6>
                    </div>
                    <div className='scoreandreview'>
                      <div className='score_icon'>
                      {[...Array(5)].map( (star, i) => {
                        const ratingvalue = i + 1;
                        return (
                          <label key={i}>
                            <FaStar
                              color={ ratingvalue <= rc.score ? "#ffc107" : "#A4A4A4"}
                              size="15"
                            />
                          </label>
                        )} 
                      )}
                      </div>
                      <span className='review'>{rc.review}</span>
                    </div>
                    <p className='price'>{rc.price.toLocaleString()}원</p>
                  </div>
                </div>
              ) )
            }
          </div>
          <div className='pagebtns'>
            <button className='prev'></button>
            <div className='numbers'>
              <button className='number btn1'>1</button>
              <button className='number'>2</button>
              <button className='number'>3</button>
              <button className='number'>4</button>
              <button className='number'>5</button>
            </div>
            <button className='next'></button>
          </div>
        </div>

      </div>
    </div>
  )
}