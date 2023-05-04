import React, { useContext, useEffect, useState } from 'react'
import RecipeContext from '../context/RecipeContext'

import { FaStar } from 'react-icons/fa';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function RecipeWriteForm() {
  const navigate = useNavigate();
  const { userstate, useraction } = useContext(DataContext);
  const { state, action } = useContext(RecipeContext);
  

  const [modalShow, setModalShow] = useState(false);


  const [newImg, setNewImg] = useState();
  const [newSubtitle, setNewSubtitle] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newCategory, setNewCategory] = useState("main");
  const [newLod, setNewLod] = useState(null);
  const [hoverLod, setHoverLod] = useState(null);
  const [newTime, setNewTime] = useState();
  const [newServings, setNewServings] = useState();
  const [newIngredient, setNewIngredient] = useState();
  const [newContent, setNewContent]= useState([]);
  

  // 작성날짜를 담기 위해 현재 시간, 날짜 불러오기
  const date = new Date();
  const YYYY = String(date.getFullYear()).padStart("4",0);
  const MM = String(date.getMonth()+1).padStart("2",0);
  const DD = String(date.getDate()).padStart("2",0);


  // 숨겨진 모달창을 화면에 띄우는 함수
  const clickUploadImg = (e) => {
    e.preventDefault();
    setModalShow(true);
  }


  // 이미지 업로드 함수
  const uploadImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImg(reader.result);
        setModalShow(false);
      };
      reader.readAsDataURL(file);
    }
  };


  // newContent에 담겨질 내용을 textarea에서 받아온 후 슬래쉬를 기준으로 쪼개어 새로운 배열에 담는 함수
  const handleTextareaChange = (e) => {
    const value = e.target.value;
    const newContentArray = value.split('\n').map((content) => {
      return content.trim();
    });
    setNewContent(newContentArray);
  };


  // 작성완료 버튼을 눌러서 submit 했을 때의 함수
  const onSubmitWriteForm = (e) => {
    e.preventDefault();
    const newRecipe = {
      recipeid: state.recipeid,
      category: newCategory,
      subtitle: newSubtitle,
      title: newTitle,
      userID: userstate.user.userID,
      writetime: `${YYYY}-${MM}-${DD}`,
      img: newImg,
      Lod: newLod,
      time: newTime,
      servings: newServings,
      ingredient: newIngredient,
      content: newContent,
      scrap: 0
    };
    console.log(newRecipe);
    const newRecipelist = state.recipelist.concat(newRecipe);
    console.log(newRecipelist);
    action.setRecipelist(newRecipelist);
    action.recipeidCount();
    navigate('/recipe/all');
    console.log(state.recipeid);
  }
  


  useEffect(()=>{window.scrollTo({top: 0})},[]);



  return (
    <div className='recipe_write_form_wrap'>
      <h3 className='recipe_write_form_title'>레시피 작성하기</h3>




      <form 
        action="" 
        className='recipe_write_form'
        onSubmit={onSubmitWriteForm}
      >

        {/** 이미지 업로드 버튼 */}
        <button 
          className='form_uploadimg'
          onClick={clickUploadImg} 
          style={{
            backgroundImage: newImg ? `url(${newImg})` : ''
          }}
        >
          {
            newImg ? null : <div className='form_uploadimg_icon'></div>
          }
        </button>

        <div className='form_title_wrap'>
          {/** 부제목 */}
          <input 
            type="text"
            className='form_subtitle'
            placeholder='레시피를 소개할 간단한 문구를 입력하세요'
            onChange={(e)=>{setNewSubtitle(e.target.value)}}
            spellCheck="false"
            required
          />

          {/** 제목 */}
          <input 
            type="text" 
            className='form_title'
            placeholder='제목을 입력하세요'
            onChange={(e)=>{setNewTitle(e.target.value)}}
            spellCheck="false"
            required
          />
        </div>

        <table className='form_table'>
          <tbody>
            <tr>
              <td>
                {/** 난이도 */}
                <div className='form_info flex'>  
                  <label htmlFor="" className='form_label'>난이도</label>
                  <div className='form_lod'>
                    {[...Array(5)].map( (star, i) => {
                      const ratingvalue = i + 1;
                      return (
                        <label key={i}>
                          <input 
                            type="radio" 
                            name="rating"
                            value={ratingvalue}
                            onClick={()=>{setNewLod(ratingvalue)}}
                            style={{display : "none"}}
                            required
                          />
                          <FaStar
                            className='form_lod_star'
                            color={ ratingvalue <= ( hoverLod || newLod) ? "#ffc107" : "#A4A4A4"}
                            size="25"
                            cursor="pointer"
                            onMouseEnter={()=>{setHoverLod(ratingvalue)}}
                            onMouseLeave={()=>{setHoverLod(null)}}
                          />
                        </label>
                      )} 
                    )}
                    <span className='form_lod_text'>({newLod}단계)</span>
                  </div>
                </div>
              </td>
              <td>
                {/** 카테고리 */}
                <select 
                  onChange={(e)=>{setNewCategory(e.target.value)}}
                  required
                >
                  <option value="main">메인음식</option>
                  <option value="side">곁들임음식</option>
                  <option value="soup">국/찌개</option>
                  <option value="dessert">간식</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                {/** 소요시간 */}
                <div className='form_info flex'>
                  <label htmlFor="" className='form_label'>소요시간</label>
                  <input 
                    type="text"
                    className='form_time' 
                    placeholder='예시 : 30분, 1시간 15분'
                    onChange={(e)=>{setNewTime(e.target.value)}}
                    required
                  />
                </div>
              </td>
              <td>
                {/** 몇인분 기준 */}
                <select
                  onChange={(e)=>{setNewServings(e.target.value)}}
                >
                  <option value="">선택</option>
                  <option value="1인분">1인분</option>
                  <option value="2인분">2인분</option>
                  <option value="3인분">3인분</option>
                  <option value="4인분">4인분</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

          
        
        

        

        {/** 재료 */}
        <div className='form_info'>
          <label htmlFor="" className='form_label'>재료</label>
          <br />
          <textarea 
            cols="30" 
            rows="5" 
            spellCheck="false" 
            onChange={(e)=>{setNewIngredient(e.target.value)}}
            required 
          ></textarea>
        </div>

        {/** 만드는 방법 */}
        <div className='form_info'>
          <label htmlFor="" className='form_label'>만드는 방법</label>
          <br />
          <textarea 
            cols="30" 
            rows="15" 
            spellCheck="false" 
            onChange={handleTextareaChange}
            required
          ></textarea>
        </div>  

        <input type="submit" value="작성완료!" className='form_submitbtn'/>

      </form>




      {/** 이미지 업로드 모달창 */}
      {
        modalShow && (
          <div className='modal_background'>
            <form className='modal'>
              <h5>레시피 사진 업로드</h5>
              <label htmlFor="input-file" className='addimg'>사진 업로드</label>
              <input type="file" id="input-file" onChange={uploadImg}/>
              <button className='deleteimg' onClick={()=>{setNewImg(undefined)}}>현재 사진 삭제</button>
              <button onClick={()=>{setModalShow(false)}}>닫기</button>
            </form>
          </div>
        )
      }
    </div>
  )
}
