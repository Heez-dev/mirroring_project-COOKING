**📂 Mirrored from old account**

# Project Cooking 🍳

React 기반으로 제작한 요리 레시피 관리 애플리케이션입니다.
레시피 CRUD 기능뿐 아니라 카카오맵 API 연동으로 위치 정보를 표시하고,
상태 관리를 위해 React Context와 React Hooks를 함께 활용했습니다.
UI/UX 학습과 외부 API, 전역 상태 관리 경험을 위해 만든 토이 프로젝트입니다.

⚡ 이 프로젝트는 이전에 사용한 계정의 토이 프로젝트를 미러링(mirroring)하여 가져온 버전입니다.

## 🔗 Demo

👉 [배포 페이지 바로가기](https://cosch218.github.io/Project-cooking/)

## 📌 주요 기능

- 레시피 목록 조회
- 레시피 등록 / 수정 / 삭제 (CRUD)
- 재료와 조리 방법 상세 보기
- 카카오맵 API 연동으로 요리 관련 위치/지도 표시
- React Context를 활용한 전역 상태 관리

## 🛠 기술 스택

- 언어 / 프레임워크: `React`, `JavaScript(ES6+)`
- 스타일링: `CSS`, `Styled-components`
- 상태 관리: `React Hooks` (useState, useReducer), `React Context`
- 빌드 / 개발 환경: `Create React App`
- 배포: `gh-pages`

## 📂 주요 폴더 구조 (src 기준)
```plain
src/
 ├── components/       # 공통 UI 컴포넌트 (레시피 카드, 입력 폼, 지도 등)
 ├── context/          # 전역 상태 관리 (React Context)
 ├── pages/            # 주요 페이지 (홈, 상세, 등록 등)
 ├── App.jsx           # 라우팅 및 전체 화면 구성
 └── index.js          # 앱 진입점, 렌더링
```
