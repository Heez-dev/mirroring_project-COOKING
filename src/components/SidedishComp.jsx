import React, { useContext, useState } from 'react';

import RecipeContext from '../context/RecipeContext';
import RecipeCardComp from './RecipeCardComp';

export default function MaindishComp() {

  const { state } = useContext(RecipeContext);
  const category = "side";

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const sortedRecipelist = [...state.recipelist].sort((a, b) => b.recipeid - a.recipeid);

  // Filter the recipes whose category matches the value "메인음식"
  const maindishRecipes = sortedRecipelist.filter((recipe) => recipe.category === category);

  const currentItems = maindishRecipes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(maindishRecipes.length / itemsPerPage);

  const pageBtnsPerSlide = 3;
  const [currentBtnSlide, setCurrentBtnSlide] = useState(1);
  const endPageBtnIndex = currentBtnSlide * pageBtnsPerSlide;
  const startPageBtnIndex = endPageBtnIndex - pageBtnsPerSlide;

  const pageBtnArray = Array.from({ length: totalPages });
  const currentPageBtns = pageBtnArray.slice(startPageBtnIndex, endPageBtnIndex);

  const handleNextBtnClick = () => {
    if (currentBtnSlide >= Math.ceil(totalPages / pageBtnsPerSlide)) {
      setCurrentBtnSlide(1);
      setCurrentPage(1);
    } else {
      setCurrentBtnSlide(currentBtnSlide + 1);
      setCurrentPage((currentBtnSlide + 1) * pageBtnsPerSlide - (pageBtnsPerSlide - 1));
    }
  };

  const handlePrevBtnClick = () => {
    if (currentBtnSlide <= 1) {
      setCurrentBtnSlide(Math.ceil(totalPages / pageBtnsPerSlide));
      setCurrentPage(totalPages);
    } else {
      setCurrentBtnSlide(currentBtnSlide - 1);
      setCurrentPage((currentBtnSlide - 1) * pageBtnsPerSlide - (pageBtnsPerSlide - 1));
    }
  };

  return (
    <div>
      <div className='recipecards_wrap'>
        {currentItems.map((recipelist) => (
          <RecipeCardComp key={recipelist.recipeid} recipelist={recipelist} />
        ))}
      </div>
      <div className='recipecards_pagebtn_wrap'>
        <button onClick={handlePrevBtnClick} className='prevbtn'></button>
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