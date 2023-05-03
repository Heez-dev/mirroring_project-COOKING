import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

export default function TownCommunityComp() {
  const {userstate, useraction} = useContext(DataContext);
  const boardlist = userstate.boardlist;

  const sortedboardlist = [...boardlist].sort((a, b) => b.boardid - a.boardid);

  return (
    <div className='town_community'>
      <div className='town_community_title'>
        <h3># 이웃소통</h3>
        <button>글쓰기</button>
      </div>
      <ul className='town_community_list'>
        <li className='town_community_boardtitle'>
          <span>　</span>
          <span>제목</span>
          <span>글쓴이</span>
          <span>날짜</span>
          <span>추천</span>
        </li>
        {
          sortedboardlist.map ((board)=>(
            <li className='town_community_board'>
              <span className='boardid'>{board.boardid}</span>
              <span className='boardtitle'>{board.title}</span>
              <span>{board.userID}</span>
              <span className='boardtime'>{board.time}</span>
              <div className='boardlike'>
                <div className='boardlikeicon'></div>
                <span className='boardliketext'>{board.like}</span>
              </div>
            </li>
          ))
        }
      </ul>
      <div className='page_btns'></div>
    </div>
  )
}
