import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'


import RecipeContext from '../context/RecipeContext';
import RecipeCardComp from '../components/RecipeCardComp';


export default function Mypage_MyRecipe() {
  const {userID} = useParams();
  const { state } = useContext(RecipeContext);
  const recipelist = state.recipelist;

  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveMain, setIsActiveMain] = useState(false);
  const [isActiveSide, setIsActiveSide] = useState(false);
  const [isActiveSoup, setIsActiveSoup] = useState(false);
  const [isActiveDessert, setIsActiveDessert] = useState(false);

  const myRecipe = recipelist.filter((r)=>r.userID === userID);

  const itemsPerPage = 6; // 한 페이지당 보여줄 아이템의 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  // recipeid 기준으로 myRecipe 배열을 역순으로 정렬
  const [sortedRecipelist, setSortedRecipelist] = useState(myRecipe);

  const onClickAll = () => {
    const myRecipeAll = myRecipe.sort((a, b) => b.recipeid - a.recipeid)
    setIsActiveAll(true);
    setIsActiveMain(false);
    setIsActiveSide(false);
    setIsActiveSoup(false);
    setIsActiveDessert(false);
    setSortedRecipelist(myRecipeAll);
  }

  const onClickMain = () => {
    let filterMyRecipe = myRecipe.filter((c) => c.category === "main");
    let sortedRecipes = filterMyRecipe.sort((a, b) => b.recipeid - a.recipeid);
    setSortedRecipelist(sortedRecipes);
    setIsActiveAll(false);
    setIsActiveMain(true);
    setIsActiveSide(false);
    setIsActiveSoup(false);
    setIsActiveDessert(false);
  }

  const onClickSide = () => {
    let filterMyRecipe = myRecipe.filter((c) => c.category === "side");
    let sortedRecipes = filterMyRecipe.sort((a, b) => b.recipeid - a.recipeid);
    setSortedRecipelist(sortedRecipes);
    setIsActiveAll(false);
    setIsActiveMain(false);
    setIsActiveSide(true);
    setIsActiveSoup(false);
    setIsActiveDessert(false);
  }

  const onClickSoup = () => {
    let filterMyRecipe = myRecipe.filter((c) => c.category === "soup");
    let sortedRecipes = filterMyRecipe.sort((a, b) => b.recipeid - a.recipeid);
    setSortedRecipelist(sortedRecipes);
    setIsActiveAll(false);
    setIsActiveMain(false);
    setIsActiveSide(false);
    setIsActiveSoup(true);
    setIsActiveDessert(false);
  }

  const onClickDessert = () => {
    let filterMyRecipe = myRecipe.filter((c) => c.category === "dessert");
    let sortedRecipes = filterMyRecipe.sort((a, b) => b.recipeid - a.recipeid);
    setSortedRecipelist(sortedRecipes);
    setIsActiveAll(false);
    setIsActiveMain(false);
    setIsActiveSide(false);
    setIsActiveSoup(false);
    setIsActiveDessert(true);
  }


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
  


  useEffect(()=>{
    window.scrollTo({top: 0})
    onClickAll()
  },[]);
  


  return (
    <div className='myrecipe'>
      

      <h3 className='title'>마이 레시피</h3>


      <ul className='recipe_menu_bar'>
        <li>
          <button
            onClick={onClickAll} 
            className={isActiveAll ? 'recipe_menu_active' : 'recipe_menu_inactive'}
          >
            모두보기
          </button>
        </li>
        <li>
          <button 
            onClick={onClickMain}
            className={isActiveMain ? 'recipe_menu_active' : 'recipe_menu_inactive'}
          >
            메인음식
          </button>
        </li>
        <li>
          <button
            onClick={onClickSide}
            className={isActiveSide ? 'recipe_menu_active' : 'recipe_menu_inactive'}
          >
            곁들임음식
          </button>
        </li>
        <li>
          <button
            onClick={onClickSoup}
            className={isActiveSoup ? 'recipe_menu_active' : 'recipe_menu_inactive'}
          >
            국/찌개
          </button>
        </li>
        <li>
          <button
            onClick={onClickDessert}
            className={isActiveDessert ? 'recipe_menu_active' : 'recipe_menu_inactive'}
          >
            간식
          </button>
        </li>
      </ul>


      <div className='recipecards_wrap'>
        {
          currentItems.map((recipe, recipeid)=>(
            <RecipeCardComp key={recipeid} recipelist={recipe} />
          ))
        }
      </div>
      

      <div className='recipecards_pagebtn_wrap'>
        <button onClick={handlePrevBtnClick} className='prevbtn'></button>
        {/* 페이지 번호 버튼 시작 */}
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
        {/* 페이지 번호 버튼 끝 */}
        <button onClick={handleNextBtnClick} className='nextbtn'></button>
      </div>
    </div>
  )
}
