import React from "react";
import { useState } from "react";

const DataContext = React.createContext("");

const DataProvider = ({ children }) => {
  // User
  const [user, setUser] = useState({
    userID: "COOKING",
    userPW: "",
    userName: "",
    userBirth: "",
    userGender: "",
    userEmail: "",
    userAddress: "부산 연제구 중앙대로 1001 1층",
    userPhone: "",
    login: true,
    scraplist: [],
    likelist: [],
    writelist:[]
  });

  const [boardlist, setBoardlist] = useState([
    {
      "boardid": 1,
      "title": "훠궈 맛집 공유합니다~",
      "userID" : "토비",
      "content": "내용",
      "time": "2023-04-02",
      "like": 20
    },
    {
      "boardid": 2,
      "title": "반려동물 데리고 가기 좋은 음식점 추천 부탁드려요!",
      "userID" : "예찬",
      "content": "내용",
      "time": "2023-04-02",
      "like": 3
    },
    {
      "boardid": 3,
      "title": "00 반찬가게 지금 할인중이네요",
      "userID" : "초록파파야111",
      "content": "내용",
      "time": "2023-04-02",
      "like": 50
    },
    {
      "boardid": 4,
      "title": "00 스토어에 흔하지 않은 식재료 많아요!",
      "userID" : "묭묭이",
      "content": "내용",
      "time": "2023-04-02",
      "like": 40
    },
    {
      "boardid": 5,
      "title": "케이크 맛있는 카페 추천해주세요",
      "userID" : "팜팜",
      "content": "내용",
      "time": "2023-04-03",
      "like": 7
    },
    {
      "boardid": 6,
      "title": "00 요리학원 원데이 클래스 수강 후기",
      "userID" : "우웅",
      "content": "내용",
      "time": "2023-04-03",
      "like": 70
    },
    {
      "boardid": 7,
      "title": "00마트에 수입 식재료 종류 많나요?",
      "userID" : "만두",
      "content": "내용",
      "time": "2023-04-03",
      "like": 2
    },
    {
      "boardid": 8,
      "title": "00 와인샵 가보신 분!?",
      "userID" : "아무무",
      "content": "내용",
      "time": "2023-04-03",
      "like": 6
    },
    {
      "boardid": 9,
      "title": "신선한 야채나 과일만 파는 그런 가게 있나요?",
      "userID" : "뚜비",
      "content": "내용",
      "time": "2023-04-04",
      "like": 3
    },
    {
      "boardid": 10,
      "title": "00베이커리 후기",
      "userID" : "하리보",
      "content": "내용",
      "time": "2023-04-04",
      "like": 30
    },
  ]);

  const value = {
    userstate: { user, boardlist },
    useraction: { setUser, setBoardlist },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
