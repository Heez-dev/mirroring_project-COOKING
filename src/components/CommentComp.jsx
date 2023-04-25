import React from 'react'

export default function CommentComp(props) {
  const {commentid, recipeid, userID, comment, commentdate, like} = props.comment;
  const {deleteComment, clickLike} = props;

  return (
    <div className='connemt_content'>
      <div>
        <div className='comment_user_info'>
          <div className='comment_user_edit'>
            <h5 className='comment_user'>{userID}</h5>
            <button 
              className='comment_editbtn'
            ></button>
          </div>
          <button className='comment_deletebtn'
            onClick={()=>{deleteComment(commentid)}}
          >
          </button>
        </div>
        <p>{comment}</p>
        <div className='comment_like'>
          <button 
            className='comment_likebtn'
            onClick={()=>{clickLike(commentid)}}
          >
          </button>
          <span>{like}</span>
        </div>
      </div>
      <span className='comment_date'>{commentdate}</span>
      <button className='comment_reply'>답글</button>
    </div>
  )
}
