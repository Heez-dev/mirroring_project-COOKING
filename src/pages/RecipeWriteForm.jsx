import React, { useContext, useState } from 'react'
import RecipeContext from '../context/RecipeContext'
import { upload } from '@testing-library/user-event/dist/upload';

export default function RecipeWriteForm() {
  const { state, action } = useContext(RecipeContext);
  const recipelist = state.recipelist;
  const setRecipelist = action.setRecipelist;

  const [modalShow, setModalShow] = useState(false);
  const [newImg, setnewImg] = useState();

  const clickUploadImg = (e) => {
    e.preventDefault();
    setModalShow(true);
  }

  const uploadImg = (e) => {
    console.dir(e.target.files[0])
    if (e.target.value === undefined) {
      return -1;
    }
    setnewImg(e.target.files[0]);
    setModalShow(false);
  }

  return (
    <div className='recipe_write_form_wrap'>
      <h3 className='recipe_write_form_title'>레시피 작성하기</h3>
      <form action="" className='recipe_write_form'>
        <button onClick={clickUploadImg} className='form_uploadimg'
        style={{backgroundImage:`url(${URL.createObjectURL(newImg)})`}}>
          <div className='form_uploadimg_icon'></div>
        </button>
        <input type="text" placeholder='제목을 입력하세요' className='form_uploadtitle'/>
        <div className='form_info flex'>  
          <label htmlFor="" className='form_label'>난이도</label>
          <select name="" id="" className='form_lod'>
            <option value="선택">선택</option>
            <option value="1단계">★☆☆☆☆</option>
            <option value="2단계">★★☆☆☆</option>
            <option value="3단계">★★★☆☆</option>
            <option value="4단계">★★★★☆</option>
            <option value="5단계">★★★★★</option>
          </select>
        </div>
        <div className='form_info flex'>
          <label htmlFor="" className='form_label'>소요시간</label>
          <input type="text" name="" id="" className='form_time' placeholder='30분'/>
        </div>
        <div className='form_info'>
          <label htmlFor="" className='form_label'>재료</label>
          <br />
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className='form_info'>
          <label htmlFor="" className='form_label'>만드는 방법</label>
          <br />
          <textarea name="" id="" cols="30" rows="15"></textarea>
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
              <button className='deleteimg'>현재 사진 삭제</button>
              <button onClick={()=>{setModalShow(false)}}>닫기</button>
            </form>
          </div>
        )
      }
    </div>
  )
}
