import React, { useContext } from 'react'

import DataContext from '../context/DataContext';
import RecipeContext from '../context/RecipeContext';

export default function ScrapBtnComp({recipe}) {


  const { userstate, useraction } = useContext(DataContext);
  const user = userstate.user;
  const setUser = useraction.setUser;

  const { state, action } = useContext(RecipeContext);
  const recipelist = state.recipelist;
  const setRecipelist = action.setRecipelist;

  const scrapClick = (recipe) => {
    if(user.login === false) {
      if (window.confirm("로그인이 필요합니다. 로그인하시겠습니까?")) {
        window.location.href = '/signin'
      } else {
        alert("취소하셨습니다.")
      }
    } else {

      // user.scraplist에 해당 recipeid 값이 있다면 >> 제거
        // 그 값을 제거한 새로운 배열을 concat으로 생성 후 setUser로 user의 scraplist에 새로 생성한 배열 값 전달
        // reciplist.scrap 에 -1
      if (user.scraplist.find((s)=>(s.recipeid === recipe.recipeid))) {
        const newScraplist = user.scraplist.filter((s)=>(s.recipeid !== recipe.recipeid)) 
        setUser({ ...user, scraplist: newScraplist });
        const newRecipescrapCount = recipelist.map((d)=>(d.recipeid === recipe.recipeid ? {...d, scrap:d.scrap-1} : d));
        setRecipelist (newRecipescrapCount);
      }
      // user.scraplist에 해당 recipeid 값이 없다면 >> 추가
        // 그 값을 추가한 새로운 배열을 concat으로 생성 후 setUser로 user의 scraplist에 새로 생성한 배열 값 전달
        // reciplist.scrap 에 +1
      else {
        const newScraplist = user.scraplist.concat(recipe);
        setUser({ ...user, scraplist: newScraplist });
        const newRecipescrapCount = recipelist.map((d)=>(d.recipeid === recipe.recipeid ? {...d, scrap:d.scrap+1} : d));
        setRecipelist (newRecipescrapCount);
      }
      console.log(user.scraplist);
    }
  }
  
    return (
      <div onClick={()=>{scrapClick(recipe)}}>
        {
        user.login && (user.scraplist.find((scrap)=>(scrap.recipeid == recipe.recipeid)))
        ? <div className='heart_icon_on'></div>
        : <div className='recipecard_heart_icon'></div>
        }
      </div>
      
    )
  
}
