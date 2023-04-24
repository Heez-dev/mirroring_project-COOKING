import React from 'react'

export default function CommentComp(props) {
  const {commentid, recipeid, userID, comment, commentdate, good} = props.comment
  return (
    <div className='connemt_content'>
      <div>
        <div className='comment_user_info'>
          <div className='comment_user_edit'>
            <h5 className='comment_user'>{userID}</h5>
            <button className='comment_editbtn'>수정</button>
          </div>
          <button className='comment_deletebtn'>삭제</button>
        </div>
        <p>{comment}</p>
        <div className='comment_good'>
          <button>좋아요</button>
          <span>{good}</span>
        </div>
      </div>
      <span className='comment_date'>{commentdate}</span>
      <button className='comment_reply'>답글</button>
    </div>
  )
}
