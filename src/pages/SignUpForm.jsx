import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { state, action } = useContext(DataContext);

  // 회원가입 시 사용자 정보를 담을 공간
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

  // 아이디 정규식
  const idRegEx = /^[a-z0-9]([-_.]?[a-z0-9]){6,12}$/;
  // 아이디 중복확인 메소드
  /*const idCheck = (e) => {
    // 형식에 맞을 경우, true 값을 리턴함
    return console.log("아이디 유효성 검사 : ", idRegEx.test(e.target.value));
  };*/
  const idCheck = (e) => {
    setUserID(e.target.value);
    console.log("아이디 유효성 검사 : ", idRegEx.test(e.target.value));
  };

  // 패스워드 정규식
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/;
  // 패스워드 확인 메소드 (비밀번호)
  const pwCheck = (userpw) => {
    if (userpw.match(pwRegEx) === null) {
      // 형식에 맞지 않을 경우 아래 콘솔 출력
      console.log("비밀번호 형식을 확인해 주세요");
    } else {
      // 형식에 맞을 경우 출력
      console.log("비밀번호 형식이 맞습니다");
    }
  };
  // 패스워드 확인 메소드 (비밀번호 재확인)
  const pwDoubleCheck = (userpw, pwChk) => {
    if (userpw !== pwChk) {
      console.log("비밀번호가 다릅니다");
    } else {
      console.log("비밀번호가 같습니다");
    }
  };

  // 생년월일 입력 시 값을 담을 공간
  let month = new Array(12);
  month.fill(0);
  let date = new Array(31);
  date.fill(0);

  // 이메일 정규식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  // 이메일 확인 메소드
  const emailCheck = (useremail) => {
    if (useremail.match(emailRegEx) === null) {
      // 형식에 맞지 않을 경우 아래 콘솔 출력
      console.log("이메일 형식을 확인해 주세요");
    } else {
      console.log("이메일 형식이 맞습니다");
    }
  };

  // 회원가입 메소드
  const onSignUp = (e) => {
    // submit할 때 새로고침 되는 것 prevenet
    e.preventDefault();
    // 전달할 user 객체 만들기
    const newUser = {
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
    action.setUser(newUser);
    // 메인페이지로 이동
    navigate("/");
    console.log(newUser);
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
                <input type="text" required onChange={idCheck} />
              </li>
              <li>
                <p className="confirmbtn">중복확인</p>
              </li>
            </ul>
          </div>
          {idCheck === true ? (
            <span>아이디를 사용할 수 있습니다</span>
          ) : (
            <span>
              아이디는 영문 소문자, 숫자를 혼합하여 6~12자로 입력해 주세요
            </span>
          )}
          <div className="user_pw">
            <p>
              <label htmlFor="">비밀번호</label>
            </p>
            <div className="pw">
              <input
                type="password"
                required
                onChange={(e) => {
                  setUserPW(e.target.value);
                }}
              />
              <div className="padlock"></div>
            </div>
            <p>
              <label htmlFor="">비밀번호 재확인</label>
            </p>
            <div className="pw">
              <input
                type="password"
                required
                onChange={(e) => {
                  setUserPWCheck(e.target.value);
                }}
              />
              <div className="padlock"></div>
            </div>
          </div>
          <span className="hidden">
            비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해 주세요
          </span>
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
            >
              <option value="" selected>
                월
              </option>
              {month.map((f, i) => (
                <option value={i + 1} title="월">
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
            >
              <option value="" selected>
                일
              </option>
              {date.map((f, i) => (
                <option value={i + 1}>{i + 1}</option>
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
