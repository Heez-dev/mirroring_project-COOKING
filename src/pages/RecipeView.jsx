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
  const { userstate, useraction } = useContext(DataContext);
  const [ comment, setComment ] = useState();

  const recipelist = state.recipelist;
  const setRecipelist = action.setRecipelist;
  const commentlist = state.commentlist;
  const setCommentlist = action.setCommentlist;
  const setLike = action.setLike;
  const user = userstate.user;
  const setUser = useraction.setUser;

  const curRecipe = recipelist.find( (s) => (s.recipeid === parseInt(recipeid)) )

  const curRecipeCommentlist = commentlist.filter( (c) => c.recipeid === parseInt(recipeid) ) 

  
  // 현재 날짜, 시간 불러오기
  const date = new Date();
  const YYYY = String(date.getFullYear()).padStart("4",0);
  const MM = String(date.getMonth()+1).padStart("2",0);
  const DD = String(date.getDate()).padStart("2",0);
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
    e.preventDefault();
    if (user.login === false) {
      if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
        window.location.href = '/signin';
      } else {
        return -1;
      }
    } else {
      const newComment = {
        commentid:state.commentid,
        recipeid: curRecipe.recipeid,
        userID: user.userID,
        comment: comment,
        commentdate: `${YYYY}-${MM}-${DD}`,
        like: state.like
      };
      action.commentidCount();
      const newCommentlist = commentlist.concat(newComment);
      setCommentlist(newCommentlist);
      e.target.reset(); // form 요소 리셋
      setComment(""); // 댓글 입력하는 textarea 리셋
    }
  }

  // 댓글 삭제 버튼 메소드
  const deleteComment = (commentid) => {
    const newCommentlist = commentlist.filter( (c) => (c.commentid !== commentid) );
    setCommentlist(newCommentlist);
  }


  // 댓글 좋아요 버튼 메소드
  const clickLike = (comment) => {
    if (user.login === false) {
      if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
        window.location.href = '/signin';
      } else {
        return -1;
      }
    } else {
      // 값이 있다면 삭제
      if (Array.from(user.likelist).find((like)=>(like.commentid === comment.commentid))) {
        // user의 likelist에서 삭제
        const newlikelist = user.likelist.filter((like)=>(like.commentid !== comment.commentid));
        setUser({ ...user, likelist: newlikelist })
        // comment의 like -1
        //const curComment = commentlist.find( (c) => (c.commentid === comment.commentid))
      } else {
        // user의 likelist에 추가
        const newlikelist = {
          ...user,
          likelist:comment
        }
        setUser({...user, likelist: newlikelist})
        // comment의 like +1
        //setCommentlist({ ...commentlist, like:like++ });
        
      }
    }
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
            <tbody>
              <tr>
                <td>작성자</td>
                <td>{curRecipe.userID}</td>
              </tr>
              <tr>
                <td>난이도</td>
                <td className='currecipe_lod'>{curRecipe.Lod}</td>
              </tr>
              <tr>
                <td>소요시간</td>
                <td>{curRecipe.time}</td>
              </tr>
              <tr>
                <td className='currecipe_ingredient_title'>재료</td>
              </tr>
              <tr>
                <td className='currecipe_ingredient' colSpan={2}>
                  <p>({curRecipe.servings} 기준)</p>
                  {curRecipe.ingredient}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='currecipe_content'>
        {curRecipe.content.map((recipeContent, i)=>(
          <div key={i}>
            <p>{recipeContent}</p>
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
          curRecipeCommentlist.map((comment, commentid)=>(
            <CommentComp
              key={commentid}
              comment={comment}
              deleteComment={deleteComment}
              clickLike={clickLike}
              user={user}
            />
          ))
        }
      </div>
    </div>
  )
}
