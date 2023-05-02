import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

export default function TownCommunityComp() {
  const {userstate, useraction} = useContext(DataContext);
  const boardlist = userstate.boardlist;

  const sortedboardlist = [...boardlist].sort((a, b) => b.boardid - a.boardid);

  return (
    <div className='town_community'>
      <div>
        <h3># 이웃소통</h3>
        <button>글쓰기</button>
      </div>
      <ul>
        {
          sortedboardlist.map ((board)=>(
            <li>
              <span>{board.boardid}</span>
              <span>{board.title}</span>
              <span>{board.time}</span>
              <span>b</span>
              <span>{board.like}</span>
            </li>
          ))
        }
      </ul>
      <div className='page_btns'></div>
    </div>
  )
}
