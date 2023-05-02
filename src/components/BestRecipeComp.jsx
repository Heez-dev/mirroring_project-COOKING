import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import RecipeContext from '../context/RecipeContext'
import ScrapBtnComp from './ScrapBtnComp';


export default function BestRecipeComp() {
  const { state } = useContext(RecipeContext);
  const recipelist = state.recipelist
  
  const itemsPerPage = 5; // 한 페이지당 보여줄 아이템의 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  
  // scrap 수 기준으로 레시피리스트 정렬
  const scrapSortedRecipelist = [...recipelist].sort((a, b) => b.scrap - a.scrap);
  const bestRecipelist = scrapSortedRecipelist.slice(0,10);

  const bestRecipeSwiperId = "bestRecipeSwiper";

  useEffect(() => { 
    document.getElementById('BestRecipeComp')?.scrollTo(0, 0); // 첫 렌더시 스크롤이 최상단 고정된다
  }, []);

  return (
    <div className='best_recipe_wrap'>
      <h3 className='best_recipe_title'># 베스트 레시피</h3>
      {/** Swiper를 이용한 슬라이더 */}
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper best_recipelist"
        id='bestRecipeSwiperId'
      >
        <div className='best_recipe_wrap'>
          {
            bestRecipelist.map(({ recipeid, category, subtitle, title, userID, writetime, img, Lod, time, servings, ingredient, content, scrap }, index)=>(
              <SwiperSlide className='best_recipe' key={recipeid}>
                <Link to={`/recipe/${recipeid}/${category}/${title}`}>
                  <div className='best_card'>
                    <div className='best_img_wrap'>
                      
                        <div className='best_img' style={{backgroundImage: `url(${img})`}}></div>
                      
                    </div>
                    <div className='best_ranking_wrap'>
                      <h4 className='best_ranking'>{String(index + 1).padStart(2,"0")}</h4>
                    </div>
                    <h4 className='best_subtitle'>{subtitle}</h4>
                    <h3 className='best_title'>{title}</h3>
                    <div className='recipecard_time_wrap'>
                      <div className='recipecard_time_icon'></div>
                      <span className='recipecard_time'>{time}</span>
                    </div>
                  </div>
                </Link>
                <ScrapBtnComp recipe={bestRecipelist[index]}/>
              </SwiperSlide>
            ))
        }
        </div>
      </Swiper>
    </div>
  )
}