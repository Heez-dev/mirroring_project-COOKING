import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUpAgreement() {
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);
  const navigate = useNavigate();


  const checkAll = (e) => {
    e.target.checked
    ? setCheckList(["agelimit", "terms", "collect", "marketing", "promotion"])
    : setCheckList([]);
  };


  const check = (e) => {
    e.target.checked
    ? setCheckList([...checkList, e.target.name])
    : setCheckList(checkList.filter((choice) => choice !== e.target.name))
  }


  return (
    <div className='sign_up_agreement'>
      <Link to='/'><div className='sign_logo'></div></Link>
      <div className='agreement_text'>
        <h3>서비스 이용약관에 동의해 주세요.</h3>
        <form 
          action="" 
          onSubmit={(e)=>{
            e.preventDefault();
            navigate('/signup_form');
          }}
        >
          <input 
            type="checkbox"
            name="all"
            onChange={checkAll}
            checked={checkList.length === 5? true : false}
            
          />
          <label htmlFor="">네, 모두 동의합니다.</label>
          <ul className='agreement_check'>
            <li>
              <input 
                type="checkbox" 
                name="agelimit"
                onChange={check}
                checked={checkList.includes("agelimit") ? true :false}
                required
              />
              <label htmlFor="">(필수) 만 14세 이상입니다</label>
              <button>보기</button>
            </li>
            <li>
              <input 
                type="checkbox" 
                name="terms"
                onChange={check}
                checked={checkList.includes("terms") ? true :false}
                required
              />
              <label htmlFor="">(필수) 서비스 이용약관에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input 
                type="checkbox" 
                name="collect"
                onChange={check}
                checked={checkList.includes("collect") ? true :false}
                required
              />
              <label htmlFor="">(필수) 개인정보 수집 및 이용에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input 
                type="checkbox"
                name="marketing"
                onChange={check}
                checked={checkList.includes("marketing") ? true :false}
              />
              <label htmlFor="">(선택) 홍보 및 마케팅 이용에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input 
                type="checkbox"
                name="promotion"
                onChange={check}
                checked={checkList.includes("promotion") ? true :false}
              />
              <label htmlFor="">(선택) 프로모션 정보 수신 동의</label>
              <button>보기</button>
            </li>            
          </ul>
          <input 
            type="submit" 
            value="다음"
          />
        </form>
      </div>
    </div>
  )
}
