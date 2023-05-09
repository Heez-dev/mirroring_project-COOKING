import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import DataContext from '../context/DataContext';
import FindAddrComp from '../components/FindAddrComp';


export default function Mypage() {
  const {userID} = useParams();
  
  const { userstate, useraction } = useContext(DataContext);
  const user = userstate.user;

  const [inputPassword, setInputPassword] = useState();
  const [showForm, setShowForm] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showUserEdit, setShowUserEdit] = useState(false);

  // 회원가입 시 입력받은 사용자 정보를 담을 useState
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

  // 정규식을 이용하여 패스워드 유효성 검증할 useState
  const [isValidPw, setIsValidPw] = useState(false);
  const [isValidPwCheck, setIsValidPwCheck] = useState(false);
  const [idFocustrue, setIdFocustrue] = useState(false);
  const [pwFocustrue, setPwFocustrue] = useState(false);
  const [pwCheckFocustrue, setPwCheckFocustrue] = useState(false);

  // 인증번호를 생성하기 위한 useState
  const[randomNum,setRandomNum] = useState(null)
  // 인증번호 확인을 위한 useState
  const [inputRandomNum, setInputRandomNum] = useState();

  // 패스워드 정규식
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/;

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

  const checkPassword = (e) => {
    e.preventDefault();
    if (inputPassword === user.userPW) {
      setShowForm(false);
      setShowUserInfo(true);
    }
  }

  const clickEditUesr = () => {
    setShowUserInfo(false);
    setShowUserEdit(true);
  }

  // 인증번호 받기 버튼 메소드
  // 1. 랜덤으로 6개의 숫자 생성
  // 2. 인증번호 입력 칸과 인증번호 확인 버튼 생성
  // 3. alert로 랜덤으로 생성된 6개 숫자를 보여줌
  const getVerificationCode = () => {
    setRandomNum(String(Math.floor(Math.random()*1000000)).padStart(6, "0"));
  }

  // 회원수정 메소드
  const onEditUser = (e) => {
    // submit할 때 새로고침 되는 것 prevenet
    e.preventDefault();
    if ((isValidPw===true) && (isValidPwCheck===true)) {
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
      setShowUserEdit(false);
      setShowUserInfo(true);
      console.log(newUser);
    } else if (isValidPw===false) {
      alert("비밀번호를 확인해 주세요");
    } else if(isValidPwCheck===false) {
      alert("비밀번호가 일치하지 않습니다")
    } 
  };

  const cancelEdit = () => {
    if (window.confirm('정말로 취소하시겠습니까?')) {
      setShowUserEdit(false);
      setShowUserInfo(true);
    }
  }

  useEffect(()=>{
    window.scrollTo({top: 0})
    if (randomNum) {alert(randomNum)}
  },[randomNum]);

  const passwordMask = inputPassword ? "*".repeat(inputPassword.length) : "";

  return (
    <div className='mypage'>
      <h3 className='title'>회원정보</h3>


      {
        showForm && (
          <form 
            action=""
            onSubmit={checkPassword}
            className='check_password'
          >
            <input 
              type="password"
              placeholder='비밀번호를 입력해 주세요'
              onChange={(e)=>{setInputPassword(e.target.value)}}
            />
            <input type="submit" value='확인' />
          </form>
        )
      }


      {
        showForm === false && showUserInfo && (
          <div className='about_user'>
            <table>
              <tbody>
                <tr>
                  <th>아이디</th>
                  <td>{user.userID}</td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>{passwordMask}</td>
                </tr>
                <tr>
                  <th>이름</th>
                  <td>{user.userName}</td>
                </tr>
                <tr>
                  <th>생일</th>
                  <td>{user.userBirth}</td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td>{user.userGender}</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>{user.userEmail}</td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>{user.userAddress}</td>
                </tr>
                <tr>
                  <th>휴대전화</th>
                  <td>{user.userPhone}</td>
                </tr>
              </tbody>
            </table>
            <button className='editbtn' onClick={clickEditUesr}>수정</button>
          </div>
        )
      }


      {
        showForm === false && showUserEdit && (
          <form action="" onSubmit={onEditUser} className='user_edit'>
            <div className="user">
              <div>
                <p>
                  <label htmlFor="">아이디</label>
                </p>
                <p className='user_id' style={{marginBottom: 0}}>{user.userID}</p>
                <span>아이디는 수정할 수 없습니다</span>
              </div>
              <div className="user_pw">
                <p>
                  <label htmlFor="">비밀번호</label>
                </p>
                <div className="pw">
                  <input
                    type="password"
                    onChange={pwCheck}
                    onFocus={()=>{setPwFocustrue(true)}}
                    onBlur={()=>{setPwFocustrue(false)}}
                    required
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
                    onChange={pwDoubleCheck}
                    onFocus={()=>{setPwCheckFocustrue(true)}}
                    onBlur={()=>{setPwCheckFocustrue(false)}}
                    required
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
                placeholder={user.userName}
                value={user.userName}
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
                  style={{marginBottom: 0}}
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
              </div>
              <p>
                <label htmlFor="">이메일</label>
              </p>
              <input
                type="email"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <p>
                <label htmlFor="">주소</label>
              </p>
              <div className="user_address">
                <FindAddrComp setUserAddress={setUserAddress}/>
              </div>
              <p>
                <label htmlFor="">휴대전화</label>
              </p>
              <div className="user_phone">
                <ul>
                  <li>
                    <input 
                      type="text" 
                      placeholder="숫자만 입력해 주세요" 
                      maxLength="11" 
                      onChange={(e)=>{setUserPhone(e.target.value)}}
                      required
                    />
                  </li>
                  <li>
                    <p id="getVerificationCode" className="confirmbtn" onClick={getVerificationCode}>인증번호 받기</p>
                  </li>
                </ul>
                {
                  randomNum && (
                    <input
                      type="text"
                      placeholder="인증번호를 입력해 주세요"
                      onChange={(e)=>{setInputRandomNum(e.target.value)}}
                      required
                    />
                  )
                }
                {
                  randomNum 
                  ? ''
                  : (<span className="hidden">인증번호를 입력하면 프로필 수정 버튼이 활성화됩니다</span>)
                }
                {
                  randomNum &&
                  (randomNum === inputRandomNum 
                  ? (<span style={{color: "#00A82F"}}>인증번호가 일치합니다</span>)
                  : (<span>인증번호가 일치하지 않습니다</span>))
                }
              </div>
            </div>
            <input type="submit" value="프로필 수정" />
            <button onClick={cancelEdit}>취소</button>
          </form>
        )
      }
    </div>
  )
}
