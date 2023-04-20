import React from "react";
import { useState, useContext } from "react";

const RecipeContext = React.createContext("");

const RecipeProvider = ({ children }) => {
  // 모든 레시피
  const [recipelist, setRecipelist] = useState([
    {
      "recipeid": 1,
      "category": "메인메뉴",
      "title": "까르보나라",
      "writer": "COOKING",
      "writetime": "2023-04-02",
      "img": [],
      "Lod": 3,
      "time": "30분",
      "servings": "2인분",
      "ingredient": "마늘 4개, 양파 1/4개, 양송이버섯 6개, 베이컨 2~3장, 생크림 225ml, 우유 조금, 달걀 노른자 1개, 슬라이스 치즈 1장",
      "content": "",
      "scrap" : 50
    },
    {
      "recipeid": 2,
      "category": "메인메뉴",
      "title": "소불고기",
      "writer": "COOKING",
      "writetime": "2023-04-02",
      "img": [],
      "Lod": 4,
      "time": "1시간",
      "servings": "4인분",
      "ingredient": "소고기 불고기용 500g, 양파 1/2개, 표고버섯 2개, 대파 1대, 당근 약간, 황설탕 2스푼, 올리고당 1스푼, 물엿 1스푼, 다진마늘 1스푼, 진간장 5스푼, 참기름 2스푼, 생강가루, 후추가루, 통깨",
      "content": "",
      "scrap" : 30
    },
    {
      "recipeid": 3,
      "category": "메인메뉴",
      "title": "비빔밥",
      "writer": "COOKING",
      "writetime": "2023-04-04",
      "img": [],
      "Lod": 3,
      "time": "45분",
      "servings": "4인분",
      "ingredient": "숙주 270g, 시금치 200g, 당근 200g, 오이 1/2개, 김치 한 줌, 계란, 다진마늘, 국간장, 액젓, 고추장, 참기름 또는 들기름, 소금, 통깨",
      "content": "",
      "scrap" : 70
    }
  ]);

  const value = {
    state: {recipelist},
    action: {setRecipelist}
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
};

export { RecipeProvider };
export default RecipeContext;