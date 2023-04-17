import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpAgreement() {
  return (
    <div className='sign_up_agreement'>
      <Link to='/'><div className='sign_logo'></div></Link>
      <div className='agreement_text'>
        <h3>서비스 이용약관에 동의해 주세요.</h3>
        <form action="">
          <input type="checkbox"/>
          <label htmlFor="">네, 모두 동의합니다.</label>
          <ul className='agreement_check'>
            <li>
              <input type="checkbox"/>
              <label htmlFor="">(필수) 만 14세 이상입니다</label>
              <button>보기</button>
            </li>
            <li>
              <input type="checkbox"/>
              <label htmlFor="">(필수) 서비스 이용약관에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input type="checkbox"/>
              <label htmlFor="">(필수) 개인정보 수집 및 이용에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input type="checkbox"/>
              <label htmlFor="">(선택) 홍보 및 마케팅 이용에 동의</label>
              <button>보기</button>
            </li>
            <li>
              <input type="checkbox"/>
              <label htmlFor="">(선택) 프로모션 정보 수신 동의</label>
              <button>보기</button>
            </li>            
          </ul>
        </form>
        <Link to='/signup_form'><p>다음</p></Link>
      </div>
    </div>
  )
}
