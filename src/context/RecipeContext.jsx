import React from "react";
import { useState } from "react";

const RecipeContext = React.createContext("");

let commentid = 2;
let like = 0;

const RecipeProvider = ({ children }) => {
  // 모든 레시피
  const [recipelist, setRecipelist] = useState([
    {
      "recipeid": 1,
      "category": "side",
      "title": "배추겉절이 김치",
      "userID": "COOKING",
      "writetime": "2023-04-01",
      "img": "https://images.unsplash.com/photo-1644131447600-dcf173a37728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Lod": "중급",
      "time": "1시간",
      "servings": "",
      "ingredient": "배추 2포기, 굵은소금 2컵, 물 6컵, 양파 1개. 당근 1/3개, 부추 한 주먹, 고춧가루 1컵, 멸치액젓 6스푼, 새우젓 2스푼, 설탕 3스푼, 매실액 3스푼, 다진마늘 6스푼, 다진생강 1스푼",
      "content": [],
      "scrap" : 80
    },
    {
      "recipeid": 2,
      "category": "dessert",
      "subtitle" : "진한 풍미의 고소한",
      "title": "팝콘",
      "userID": "jun",
      "writetime": "2023-04-01",
      "img": "https://images.unsplash.com/photo-1585647347129-7aebb8689a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "초급",
      "time": "20분",
      "servings": "1인분",
      "ingredient": "팝콘 옥수수 40g, 버터 또는 식용유, 소금",
      "content": [],
      "scrap" : 100
    },
    {
      "recipeid": 3,
      "category": "main",
      "title": "까르보나라",
      "userID": "COOKING",
      "writetime": "2023-04-02",
      "img": "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      "Lod": "중급",
      "time": "30분",
      "servings": "2인분",
      "ingredient": "마늘 4개, 양파 1/4개, 양송이버섯 6개, 베이컨 2~3장, 생크림 225ml, 우유 조금, 달걀 노른자 1개, 슬라이스 치즈 1장",
      "content": ["Step 1. 재료 준비",
      "1. 양송이 버섯과 양파, 마늘 얇게 썰기",
      "2. 베이컨 먹기 좋은 크기로 썰기",
      
      "Step 2. 면 삶기",
      "1. 물에 소금 1큰술 넣고 면수 끓이기",
      "2. 스파게티 면을 넣고 8~9분 정도 삶기",
      "* 취향껏 더 삶거나 덜 삶기",
      "3. 다 삶아진 면은 올리브유로 버무려서 면끼리 엉겨붙지 않게 하기",
      
      "Step 3. 까르보나라 만들기",
      "1. 달군 팬에 올리브유를 두르고 마늘 볶기",
      "2. 마늘향이 올라오면 양파와 양송이 버섯을 넣고 볶기",
      "3. 다 볶아진 마늘, 양파, 양송이 버섯을 그릇에 담아놓기",
      "4. 채소를 볶은 팬에 베이컨 볶기",
      "5. 달걀 노른자와 생크림을 잘 섞어주기",
      "6. 베이컨이 익으면 미리 볶아서 따로 담아 놓은 채소들을 넣고 살짝 볶아준 뒤 생크림과 달걀 노른자 섞은 것을 넣기",
      "7. 보글보글 끓어오르면 슬라이스 치즈와 면을 넣고 빠르게 섞기",
      "8. 취향에 따라 소금,후추로 간을 더하기",
      "9. 마무리로 파슬리 뿌리기"],
      "scrap" : 120
    },
    {
      "recipeid": 4,
      "category": "main",
      "title": "새우국수",
      "userID": "Master",
      "writetime": "2023-04-03",
      "img": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "Lod": "초급",
      "time": "20분",
      "servings": "2인분",
      "ingredient": "면, 멸치육수팩 1개, 중간 크기 이상 새우 8~10마리, 계란 2개, 다진마늘 1스푼, 국간장 1스푼, 참기름 1스푼, 참치액 1스푼, 소금",
      "content": [],
      "scrap" : 45
    },
    {
      "recipeid": 5,
      "category": "main",
      "title": "버터 치킨 카레",
      "userID": "COOKING",
      "writetime": "2023-04-05",
      "img": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      "Lod": "중급",
      "time": "50분",
      "servings": "2인분",
      "ingredient": "닭 다리살 400g, 양파 1/2개, 홀토마토 1/2캔(200g), 시판 고체형 카레 2인분, 치킨육수 또는 물 2컵, 우유 1/2컵, 생크림 1/2컵, 땅콩버터 1.5스푼, 버터 3스푼, 밥 2인분, 맛술 1스푼, 다진마늘 1티스푼, 생강가루 한꼬집, 소금, 후춧가루",
      "content": [],
      "scrap" : 42
    },
    {
      "recipeid": 6,
      "category": "main",
      "title": "비빔밥",
      "userID": "jun",
      "writetime": "2023-04-07",
      "img": "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      "Lod": "중급",
      "time": "45분",
      "servings": "4인분",
      "ingredient": "숙주 270g, 시금치 200g, 당근 200g, 오이 1/2개, 김치 한 줌, 계란, 다진마늘, 국간장, 액젓, 고추장, 참기름 또는 들기름, 소금, 통깨",
      "content": [],
      "scrap" : 70
    },
    {
      "recipeid": 7,
      "category": "side",
      "title": "미트볼",
      "userID": "Master",
      "writetime": "2023-04-07",
      "img": "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      "Lod": "중급" ,
      "time": "30분",
      "servings": "2인분",
      "ingredient": "다진 소고기 300g, 양파 1/2개, 버터 20g, 소금, 허브, 파마산치즈 1스푼, 빵가루 3스푼, 다진마늘 1스푼, 맛술 1스푼, 계란 1개, 후춧가루",
      "content": [],
      "scrap" : 53
    },
    {
      "recipeid": 8,
      "category": "dessert",
      "title": "와플",
      "userID": "베이킹조아",
      "writetime": "2023-04-09",
      "img": "https://images.unsplash.com/photo-1600184430626-1dd6087315d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
      "Lod": "초급" ,
      "time": "20분",
      "servings": "3인분",
      "ingredient": "박력분 130g, 옥수수전분 30g, 계란 1개, 설탕 40g, 소금 2꼬집, 무염버터 40g, 우유 60ml, 물 120ml, 베이킹파우더 6g, 바닐라오일 1티스푼",
      "content": [],
      "scrap" : 77
    },
    {
      "recipeid": 9,
      "category": "main",
      "title": "소불고기",
      "userID": "COOKING",
      "writetime": "2023-04-11",
      "img": "https://images.unsplash.com/photo-1656250962056-ccc3714a9d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      "Lod": "중급",
      "time": "1시간",
      "servings": "4인분",
      "ingredient": "소고기 불고기용 500g, 양파 1/2개, 표고버섯 2개, 대파 1대, 당근 약간, 황설탕 2스푼, 올리고당 1스푼, 물엿 1스푼, 다진마늘 1스푼, 진간장 5스푼, 참기름 2스푼, 생강가루, 후추가루, 통깨",
      "content": [],
      "scrap" : 30
    },
    {
      "recipeid": 10,
      "category": "soup",
      "title": "토마토 스튜",
      "userID": "COOKING",
      "writetime": "2023-04-12",
      "img": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "중급" ,
      "time": "1시간 30분",
      "servings": "2인분",
      "ingredient": "닭다리살 100g, 양파 1/4개, 감자 1개, 양배추 70g, 당근 1/10개, 대파 15cm, 오뚜기 토마토 파스타소스 200g, 치킨육수 2컵, 다진마늘 1/2스푼, 월계수잎 1개, 올리브유 2스푼, 설탕 2스푼, 바질 1/2스푼, 생강 1/2스푼, 소금, 후춧가루",
      "content": [],
      "scrap" :38 
    },
    {
      "recipeid": 11,
      "category": "soup",
      "title": "해물 짬뽕탕",
      "userID": "Master",
      "writetime": "2023-04-13",
      "img": "https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "Lod": "중급" ,
      "time": "35분",
      "servings": "2인분",
      "ingredient": "오징어 1/2마리, 알새우 6~8마리, 바지락 한 줌, 양파 1/2개, 청경채 2개, 표고버섯 2개, 죽순 60g, 당근 약간, 애호박 약간, 배추 약간, 고추기름 2스푼, 다진마늘 1티스푼, 다진생강 1/4티스푼, 고춧가루 2큰술, 물 3컵, 소금 1/2스푼, 치킨파우더 1/2티스푼, 후춧가루 약간, 참기름 1/2 티스푼",
      "content": [],
      "scrap" : 68
    },
    {
      "recipeid": 12,
      "category": "side",
      "title": "피클",
      "userID": "jun",
      "writetime": "2023-04-13",
      "img": "https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "Lod": "초급" ,
      "time": "30분",
      "servings": "",
      "ingredient": "오이 3개, 사이다 300ml, 설탕 2티스푼, 식초 2티스푼, 소금 1/2티스푼",
      "content": [],
      "scrap" : 25
    },
    {
      "recipeid": 13,
      "category": "soup",
      "title": "비프 부르기뇽",
      "userID": "COOKING",
      "writetime": "2023-04-14",
      "img": "https://images.unsplash.com/photo-1608500218919-0df503673764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "중급" ,
      "time": "1시간 30분",
      "servings": "4인분",
      "ingredient": "소고기 사태 500g, 두꺼운 베이컨 2줄, 당근 1개, 샐러리 2대, 양송이버섯 6개, 통마늘 4톨, 양파 1개, 파슬리, 올리브오일, 버터 1스푼, 레드와인 2컵, 치킨스톡 1/2조각, 물 250ml, 토마토 페이스트 3스푼, 소금, 후춧가루, 월계수잎 2장",
      "content": [],
      "scrap" : 22
    },
    {
      "recipeid": 14,
      "category": "dessert",
      "title": "초코머핀",
      "userID": "베이킹조아",
      "writetime": "2023-04-15",
      "img": "https://images.unsplash.com/photo-1616151030851-644f0f96c1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      "Lod": "초급" ,
      "time": "1시간",
      "servings": "3인분",
      "ingredient": "무염버터 50g, 설탕 80g, 달걀 50g, 바닐라 익스트랙 1티스푼, 박력분 120g, 코코아파우더 30g, 베이킹파우더 4g, 우유 20g, 피칸 20g, 초코칩 30g",
      "content": [],
      "scrap" : 77
    },
    {
      "recipeid": 15,
      "category": "main",
      "title": "양념 닭 구이",
      "userID": "COOKING",
      "writetime": "2023-04-17",
      "img": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      "Lod": "중급" ,
      "time": "1시간 45분",
      "servings": "2인분",
      "ingredient": "닭날개 750g, 닭봉 750g, 우유, 올리브유, 소금, 후추, 진간장 3스푼, 굴소스 2스푼, 설탕 1/2스푼, 다진마늘 2스푼, 생강가루 1/2티스푼, 케첩 1스푼, 치킨스톡 1티스푼, 고춧가루 2스푼, 맛술 2스푼, 고추장 1스푼, 물엿 또는 올리고당 2스푼, 통깨",
      "content": [],
      "scrap" : 88
    },
    {
      "recipeid": 16,
      "category": "dessert",
      "title": "블루베리 치즈 케이크",
      "userID": "베이킹조아",
      "writetime": "2023-04-17",
      "img": "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "중급" ,
      "time": "1시간 30분",
      "servings": "",
      "ingredient": "다이제 120g, 버터 40g, 필라델피아 크림치즈 330g(실온), 플레인 요거트 65g(실온), 계란 1개(실온), 레몬 제스트 반개, 바닐라 익스트랙 1/2스푼, 생 블루베리 100g, 냉동 블루베리 125g, 설탕, 레몬즙",
      "content": [],
      "scrap" : 32
    },
    {
      "recipeid": 17,
      "category": "dessert",
      "title": "키위 요거트볼",
      "userID": "jun",
      "writetime": "2023-04-18",
      "img": "https://images.unsplash.com/photo-1611575609000-9a77fd26b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "초급" ,
      "time": "10분",
      "servings": "1",
      "ingredient": "플레인 요거트 또는 그릭 요거트 100~150g, 키위 1개, 그래놀라 한 줌, 꿀 1스푼",
      "content": [],
      "scrap" : 72
    },
    {
      "recipeid": 18,
      "category": "soup",
      "title": "단호박 스프",
      "userID": "COOKING",
      "writetime": "2023-04-20",
      "img": "https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "Lod": "초급" ,
      "time": "30분",
      "servings": "4인분",
      "ingredient": "손질한 단호박 200g, 우유 250g, 생크림 250g, 양파 1/2개, 무염버터 20g, 소금",
      "content": [],
      "scrap" : 38
    },
    {
      "recipeid": 19,
      "category": "side",
      "title": "알감자 버터 구이",
      "userID": "COOKING",
      "writetime": "2023-04-20",
      "img": "https://images.unsplash.com/photo-1631898039984-fd5f61fe8732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Lod": "초급" ,
      "time": "30분",
      "servings": "3인분",
      "ingredient": "알감자15개, 스틱버터 1개, 소금",
      "content": [],
      "scrap" : 29
    },
    {
      "recipeid": 20,
      "category": "dessert",
      "title": "팥빙수",
      "userID": "jun",
      "writetime": "2023-04-21",
      "img": "https://images.unsplash.com/photo-1631148625910-e48b149a64d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      "Lod": "초급" ,
      "time": "10분",
      "servings": "",
      "ingredient": "얇게 얼린 우유, 그래놀라, 팥앙금, 미숫가루, 꿀, 떡",
      "content": [],
      "scrap" : 31
    },
    {
      "recipeid": 21,
      "category": "side",
      "title": "고기만두",
      "userID": "Master",
      "writetime": "2023-04-21",
      "img": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "Lod": "중급",
      "time": "1시간",
      "servings": "5인분",
      "ingredient": "두부 1/2모, 부추 70g, 대파 80g, 다진마늘 1스푼, 배추 70g, 다진생강 1/4스푼, 다진돼지고기 360g, 당면 100g, 숙주 250g, 만두피 40~50장, 진간장 3스푼, 꽃소금 1/3스푼, 황설탕 1/2스푼, 굴소스 3스푼, 참기름 3스푼, MSG 1.2스푼, 후춧가루",
      "content": [],
      "scrap" : 40
    }
  ]);

  // 레시피 댓글
  const [commentlist, setCommentlist] = useState([
    {
      "commentid": 1,
      "recipeid": 3,
      "userID" : "yammy",
      "comment" : "맛있어보여요!",
      "commentdate" : "2023-04-24",
      "like" : 5
    }
  ]);

  const commentidCount = () => {
    commentid++;
  }

  const setLike = () => {}

  const value = {
    state: {recipelist, commentlist, commentid, like},
    action: {setRecipelist, setCommentlist, commentidCount, setLike}
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
};

export { RecipeProvider };
export default RecipeContext;