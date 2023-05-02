import React, { useContext, useState } from 'react';

import RecipeContext from '../context/RecipeContext';
import RecipeCardComp from './RecipeCardComp';
import { useNavigate } from 'react-router-dom';

export default function AllRecipeComp() {
  const { state } = useContext(RecipeContext);
  const recipelist = state.recipelist

  const itemsPerPage = 6; // 한 페이지당 보여줄 아이템의 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  // recipeid 기준으로 recipelist 배열을 역순으로 정렬
  const sortedRecipelist = [...recipelist].sort((a, b) => b.recipeid - a.recipeid);

  // 현재 페이지에 해당하는 배열만 추출하고 출력
  const currentItems = sortedRecipelist.slice(startIndex, endIndex);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(sortedRecipelist.length / itemsPerPage);

  const pageBtnsPerSlide = 3;
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
      setCurrentPage((currentBtnSlide + 1) * pageBtnsPerSlide - (pageBtnsPerSlide - 1)); // 첫번째 페이지 번호 계산
    }
  };

  // 이전 페이지 버튼 슬라이드로 이동하는 함수
  const handlePrevBtnClick = () => {
    if (currentBtnSlide <= 1) {
      setCurrentBtnSlide(Math.ceil(totalPages / pageBtnsPerSlide));
      setCurrentPage(totalPages); // 마지막 페이지로 이동
    } else {
      setCurrentBtnSlide(currentBtnSlide - 1);
      setCurrentPage((currentBtnSlide - 1) * pageBtnsPerSlide - (pageBtnsPerSlide - 1)); // 첫번째 페이지 번호 계산
    }
  };

  const navigate = useNavigate();

  const onRecipeView = (recipelist) => {
    navigate(`/recipe/${recipelist.recipeid}/${recipelist.category}/${recipelist.title}`)
  }

  return (
    <div>

      <div className='recipecards_wrap'>
        {currentItems.map((recipelist, recipeid) => (
          <RecipeCardComp key={recipeid} recipelist={recipelist} />
        ))}
      </div>

      <div className='recipecards_pagebtn_wrap'>
        <button onClick={handlePrevBtnClick} className='prevbtn'></button>

        {/* 페이지 번호 버튼 */}
        <div className='currentpagebtnslide'>
          {currentPageBtns.map((_, index) => {
            const pageBtnIndex = startPageBtnIndex + index;
            return (
              <button
                key={pageBtnIndex}
                onClick={() => setCurrentPage(pageBtnIndex + 1)}
                disabled={currentPage === pageBtnIndex + 1}
                className={`${
                  currentPage === pageBtnIndex + 1
                    ? 'recipecards_pagebtn_on'
                    : 'recipecards_pagebtn'
                }`}
              >
                {pageBtnIndex + 1}
              </button>
            );
          })}
        </div>
        
        <button onClick={handleNextBtnClick} className='nextbtn'></button>
      </div>
    </div>
  );
}