import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext';
import ScrapBtnComp from '../components/ScrapBtnComp';
import DataContext from '../context/DataContext';
import CommentComp from '../components/CommentComp';



export default function RecipeView() {
  const { recipeid, title, category } = useParams();
  const navigate = useNavigate();

  const { state, action } = useContext(RecipeContext);
  const { userstate } = useContext(DataContext);
  const [ comment, setComment ] = useState();

  const recipelist = state.recipelist;
  const setRecipelist = action.setRecipelist;
  const commentlist = state.commentlist;
  const setCommentlist = action.setCommentlist;
  const user = userstate.user

  const curRecipe = recipelist.find( (s) => (s.recipeid === parseInt(recipeid)) )

  
  // 현재 날짜, 시간 불러오기
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = date.getMonth()+1;
  const DD = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();


  // 레시피 삭제 버튼 메소드
  const deleteRecipe = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const newRecipelist = recipelist.filter((r)=>(r.recipeid !== parseInt(recipeid)));
      setRecipelist(newRecipelist);
      navigate('/recipe/all');
    }
  }


  // 댓글 작성 버튼 메소드
  const addComment = (e) => {
    e.preventdefault();
    const newComment = {
      commentid:state.commentid,
      recipeid: curRecipe.recipeid,
      userID: user.userID,
      comment: comment,
      commentdate: `${YYYY}년${MM}월${DD}일`,
      good: state.good
    };
    action.commentidCount();
    const newCommentlist = commentlist.concat(newComment);
    setCommentlist(newCommentlist);
  }

  
  return (
    <div className='currecipe_wrap'>
      <div className='currecipe_info'>
        <div style={{backgroundImage: `url(${curRecipe.img})`}} className='currecipe_info_img'></div>
        <div className='currecipe_info_text_wrap'>
          <div className='currecipe_title_wrap'>
            <h1 className='currecipe_title'>{curRecipe.title}</h1>

            {
              curRecipe && ( user.userID === curRecipe.userID 
                ? <div>
                  <button onClick={()=>{navigate(`/recipe/${curRecipe.recipeid}/${curRecipe.category}/${curRecipe.title}/edit`, {state: curRecipe})}}>수정</button>
                  <button onClick={deleteRecipe}>삭제</button>
                </div>
                : <ScrapBtnComp className='currecipe_scrap'/>
                )
            }
          </div>
          <table className='currecipe_info_text'>
            <tr>
              <td>작성자</td>
              <td>{curRecipe.userID}</td>
            </tr>
            <tr>
              <td>난이도</td>
              <td>{curRecipe.Lod}</td>
            </tr>
            <tr>
              <td>소요시간</td>
              <td>{curRecipe.time}</td>
            </tr>
            <tr>
              <td className='currecipe_ingredient_title'>재료</td>
            </tr>
            <tr>
              <td className='currecipe_ingredient' colSpan={2}>{curRecipe.ingredient}</td>
            </tr>
            <p></p>
          </table>
        </div>
      </div>
      <div className='currecipe_content'>
        {curRecipe.content.map((recipe, i)=>(
          <div>
            <p>{curRecipe.content[i]}</p>
            <br/>
          </div>
        ))}
      </div>
      <p>댓글</p>
      {/** 코멘트를 작성, 수정, 삭제할 공간 */}
      <div className='currecipe_comment'>
        <form action="" className='currecipe_comment_write' onSubmit={addComment}>
          <textarea 
            placeholder='댓글을 입력해 주세요' 
            id='currecipe_comment_writetext'
            onChange={(e)=>{setComment(e.target.value)}}
          ></textarea>
          <input type="submit" value="등록" id='currecipe_comment_writebtn'/>
        </form>
        {
          commentlist.map((comment)=>(
            <CommentComp
              key={comment.commentid}
              comment={comment}
            />
          ))
        }
      </div>
    </div>
  )
}
