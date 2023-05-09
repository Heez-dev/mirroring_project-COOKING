import React, { useEffect, useRef } from 'react'


export default function FindAddrComp({setUserAddress}) {
  let daum = window.daum;

  //아래 코드처럼 테마 객체를 생성합니다.(color값은 #F00, #FF0000 형식으로 입력하세요.)
  //변경되지 않는 색상의 경우 주석 또는 제거하시거나 값을 공백으로 하시면 됩니다.
  let themeObj = {
    //bgColor: "", //바탕 배경색
    searchBgColor: "#F27E65", //검색창 배경색
    //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    //pageBgColor: "", //페이지 배경색
    textColor: "#303030", //기본 글자색
    queryTextColor: "#FFFFFF", //검색창 글자색
    postcodeTextColor: "#F27E65", //우편번호 글자색
    emphTextColor: "#816759" //강조 글자색
    //outlineColor: "", //테두리
  };

  // 우편번호 찾기 화면을 넣을 element
  const elementLayerRef = useRef('wrap');

  const foldDaumPostcode = () => {
    if (elementLayerRef.current) {
      elementLayerRef.current.style.display = 'none';
    }
  };

  const sample3ExecDaumPostcode = () => {
    // 현재 scroll 위치를 저장해놓는다.
    const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

    new daum.Postcode({
      theme: themeObj,
      oncomplete: function(data) {
        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let addr = ''; // 주소 변수
        let extraAddr = ''; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample3_postcode').value = data.zonecode;
        document.getElementById("sample3_address").value = addr;
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample3_detailAddress").focus();

        // iframe을 넣은 element를 안보이게 한다.
        // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
        elementLayerRef.current.style.display = 'none';

        // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
        document.body.scrollTop = currentScroll;
        setUserAddress(addr);
      },
      // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
      onresize : function(size) {
        elementLayerRef.current.style.height = size.height+'px';
      },
      width : '100%',
      height : '100%'
    }).embed(elementLayerRef.current);
    // iframe을 넣은 element를 보이게 한다.
    elementLayerRef.current.style.display = 'block';
    // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
  }


  useEffect(() => {
    elementLayerRef.current = document.getElementById('wrap');
  }, []);


  return (
    <div>
      <ul>
        <input type="text" id="sample3_postcode" placeholder="우편번호" />
        <button onClick={sample3ExecDaumPostcode} id='confirmbtn'>우편번호 찾기</button>
      </ul>
      <input type="text" id="sample3_address" placeholder="주소" required/>
      <input type="text" id="sample3_detailAddress" placeholder="상세주소" required style={{marginTop:"5px"}}/>

      <div 
        id="wrap" 
        style={{
          display:"none",
          border:"1px solid",
          width:"350px",
          height:"300px",
          margin:"5px 0",
          position:"relative"
        }}
      >
        <img 
          src="//t1.daumcdn.net/postcode/resource/images/close.png" 
          id="btnFoldWrap" 
          style={{
            cursor:"pointer",
            position:"absolute",
            right:"-20px",
            top:"-1px",
            zIdex: 1
          }}
          onClick={foldDaumPostcode}
          alt="접기 버튼"
        />
      </div>
    </div>
  )
}
