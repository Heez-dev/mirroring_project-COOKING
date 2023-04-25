import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";


export default function SignUpForm() {
  const navigate = useNavigate();
  const { userstate, useraction } = useContext(DataContext);


  // 회원가입 시 입력받은 사용자 정보를 담을 useState
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userPWCheck, setUserPWCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [YYYY, setYYYY] = useState("");
  const [MM, setMM] = useState("");
  const [DD, setDD] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");


  // 정규식을 이용하여 아이디, 패스워드 유효성 검증할 useState
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isValidPwCheck, setIsValidPwCheck] = useState(false);
  const [idFocustrue, setIdFocustrue] = useState(false);
  const [pwFocustrue, setPwFocustrue] = useState(false);
  const [pwCheckFocustrue, setPwCheckFocustrue] = useState(false);


  // 아이디 정규식
  const idRegEx = /^[a-z0-9]{6,12}$/;
  // 패스워드 정규식
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/;


  // 아이디 중복확인 메소드
  const idCheck = (e) => {
    setUserID(e.target.value);
    setIsValidId(idRegEx.test(e.target.value));
  };
  // 패스워드 확인 메소드 
  const pwCheck = (e) => {
      setUserPW(e.target.value);
      setIsValidPw(pwRegEx.test(e.target.value))
    };
  // 패스워드 재확인 메소드 
  const pwDoubleCheck = (e) => {
    setUserPWCheck(e.target.value);
    setIsValidPwCheck(userPW === e.target.value);
  }


  // 생년월일 입력 시 값을 담을 공간
  let month = new Array(12);
  month.fill(0);
  let date = new Array(31);
  date.fill(0);


  // 회원가입 메소드
  const onSignUp = (e) => {
    // submit할 때 새로고침 되는 것 prevenet
    e.preventDefault();
    if ((isValidId===true) && (isValidPw===true) && (isValidPwCheck===true)) {
      // 전달할 user 객체 만들기
      const newUser = {
        ...userstate.user,
        userID: userID,
        userPW: userPW,
        userName: userName,
        userBirth: `${YYYY}-${MM}-${DD}`,
        userGender: userGender,
        userEmail: userEmail,
        userAddress: userAddress,
        userPhone: userPhone,
        login: true,
      };
      // 이 user를 set 메소드로 수정
      useraction.setUser(newUser);
      // 메인페이지로 이동
      navigate("/");
      console.log(newUser);
    } else if (isValidId===false) {
      alert("아이디를 확인해 주세요");
    } else if (isValidPw===false) {
      alert("비밀번호를 확인해 주세요");
    } else if(isValidPwCheck===false) {
      alert("비밀번호가 일치하지 않습니다")
    } 
  };


  return (
    <div className="sign_up_form">
      <Link to="/">
        <div className="sign_logo"></div>
      </Link>
      <form action="" onSubmit={onSignUp}>
        <div className="user">
          <div className="user_id">
            <p>
              <label htmlFor="">아이디</label>
            </p>
            <ul>
              <li>
                <input 
                  type="text" 
                  required 
                  onChange={idCheck} 
                  onFocus={()=>{setIdFocustrue(true)}}
                  onBlur={()=>{setIdFocustrue(false)}}
                />
              </li>
              <li>
                <p className="confirmbtn">중복확인</p>
              </li>
            </ul>
          </div>
          {
            idFocustrue && (isValidId ? (
              <span style={{color:"#00A82F"}}>아이디를 사용할 수 있습니다</span>
            ) : (
              <span>
                * 아이디는 영문 소문자, 숫자를 혼합하여 6~12자로 입력해 주세요
              </span>
            ))
          }
          <div className="user_pw">
            <p>
              <label htmlFor="">비밀번호</label>
            </p>
            <div className="pw">
              <input
                type="password"
                required
                onChange={pwCheck}
                onFocus={()=>{setPwFocustrue(true)}}
                onBlur={()=>{setPwFocustrue(false)}}
              />
              <div 
                //className="padlock"
                className={isValidPw? "padlock_on" : "padlock"}
              ></div>
            </div>
            {
              pwFocustrue && (isValidPw ? (
                <span style={{color:"#00A82F"}}>비밀번호를 사용할 수 있습니다</span>
              ) : (
                <span>
                  * 비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해 주세요
                </span>
              ))
            }
            <p>
              <label htmlFor="">비밀번호 재확인</label>
            </p>
            <div className="pw">
              <input
                type="password"
                required
                onChange={pwDoubleCheck}
                onFocus={()=>{setPwCheckFocustrue(true)}}
                onBlur={()=>{setPwCheckFocustrue(false)}}
              />
              <div 
                className={isValidPwCheck ? "padlock_on" : "padlock"}
              ></div>
            </div>
            {
              pwCheckFocustrue && (isValidPwCheck ? (
                <span style={{color:"#00A82F"}}>비밀번호가 일치합니다</span>
              ) : (
                <span>비밀번호를 일치하지 않습니다</span>
              ))
            }
          </div>
        </div>
        <div className="user_info">
          <p>
            <label htmlFor="">이름</label>
          </p>
          <input
            type="text"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p>
            <label htmlFor="">생년월일</label>
          </p>
          <div className="user_birth">
            <input
              type="text"
              placeholder="연도(4자)"
              required
              onChange={(e) => {
                setYYYY(e.target.value);
              }}
            />
            <select
              name="month"
              required
              onChange={(e) => {
                setMM(e.target.value);
              }}
              defaultValue={"월"}
            >
              <option value="">
                월
              </option>
              {month.map((f, i) => (
                <option value={i + 1} title="월" key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="date"
              required
              onChange={(e) => {
                setDD(e.target.value);
              }}
              defaultValue={"일"}
            >
              <option value="">
                일
              </option>
              {date.map((f, i) => (
                <option value={i + 1} title="일" key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p>
            <label htmlFor="">성별</label>
          </p>
          <div className="user_gender">
            <select
              name="gender"
              className="gender"
              required
              onChange={(e) => {
                setUserGender(e.target.value);
              }}
            >
              <option value="선택 안 함">선택 안 함</option>
              <option value="남">남</option>
              <option value="여">여</option>
            </select>
            <p>
              <label htmlFor="">이메일</label>
            </p>
            <input
              type="email"
              required
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <p>
              <label htmlFor="">주소</label>
            </p>
            <div className="user_address">
              <ul>
                <li>
                  <input type="text" required />
                </li>
                <li>
                  <p className="confirmbtn">주소찾기</p>
                </li>
              </ul>
              <input
                type="text"
                placeholder="상세주소를 입력해 주세요"
                required
              />
            </div>
            <p>
              <label htmlFor="">휴대전화</label>
            </p>
            <div className="user_phone">
              <ul>
                <li>
                  <input type="text" required />
                </li>
                <li>
                  <p className="confirmbtn">인증번호 받기</p>
                </li>
              </ul>
              <input
                type="text"
                placeholder="인증번호를 입력해 주세요"
                required
              />
            </div>
            <span className="hidden">
              인증번호를 입력하면 가입하기 버튼이 활성화됩니다
            </span>
          </div>
        </div>
        <input type="submit" value="가입하기" />
      </form>
    </div>
  );
}
