import React, { useContext, useState } from 'react'
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
  
  // 현재 페이지에 해당하는 배열만 추출하고 출력
  const currentItems = bestRecipelist.slice(startIndex, endIndex);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(scrapSortedRecipelist.length / itemsPerPage);

  const pageBtnsPerSlide = 2;
  const [currentBtnSlide, setCurrentBtnSlide] = useState(1);
  const endPageBtnIndex = currentBtnSlide * pageBtnsPerSlide;
  const startPageBtnIndex = endPageBtnIndex - pageBtnsPerSlide;

  const pageBtnArray = Array.from({ length: totalPages });

  // 현재 페이지 버튼을 담는 배열
  const currentPageBtns = pageBtnArray.slice(startPageBtnIndex, endPageBtnIndex);

  // 다음 페이지 버튼 슬라이드로 이동하는 함수
  const handleNextBtnClick = () => {
    if (currentBtnSlide >= Math.ceil(totalPages / pageBtnsPerSlide)) {
      setCurrentBtnSlide(1);
      setCurrentPage(1); // 첫번째 페이지로 이동
    } else {
      setCurrentBtnSlide(currentBtnSlide + 1);
      setCurrentPage((currentBtnSlide + 1)); // 첫번째 페이지 번호 계산
    }
  };

  // 이전 페이지 버튼 슬라이드로 이동하는 함수
  const handlePrevBtnClick = () => {
    if (currentBtnSlide <= 1) {
      setCurrentBtnSlide(Math.ceil(totalPages / pageBtnsPerSlide));
      setCurrentPage(totalPages); // 마지막 페이지로 이동
    } else {
      setCurrentBtnSlide(currentBtnSlide - 1);
      setCurrentPage((currentBtnSlide - 1)); // 첫번째 페이지 번호 계산
    }
  };

  return (
    <div className='best_recipe_wrap'>
      <h3 className='best_recipe_title'># 베스트 레시피</h3>
      <div className='best_recipelist'>
        {
          currentItems.map(({ recipeid, category, subtitle, title, userID, writetime, img, Lod, time, servings, ingredient, content, scrap }, index)=>(
            <div className='best_recipe' key={recipeid}>
              <div className='best_card'>
                <div className='best_img_wrap'>
                  <div className='best_img' style={{backgroundImage: `url(${img})`}}></div>
                </div>
                <div className='best_ranking_wrap'>
                  <h4 className='best_ranking'>{String(index + 1).padStart(2,"0")}</h4>
                </div>
                <ScrapBtnComp/>
                <h4>{subtitle}</h4>
                <h3 className='best_title'>{title}</h3>
                <div className='recipecard_time_wrap'>
                  <div className='recipecard_time_icon'></div>
                  <span className='recipecard_time'>{time}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='slide_btn_small '>
        <button onClick={handlePrevBtnClick} className='prevbtn'></button>
        <button onClick={handleNextBtnClick} className='nextbtn'></button>
      </div>
    </div>
  )
}