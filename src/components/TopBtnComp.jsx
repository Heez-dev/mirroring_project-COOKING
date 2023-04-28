import React, { useState, useEffect } from 'react'

export default function TopBtnComp() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(()=>{
    window.addEventListener("scroll", updateScroll);
  },[]);

  return (
    <div>
      <button
        onClick={()=>{
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }}
        className= {
          scrollPosition > 99 ? "top_btn_show" : ""
          + " top_btn"
        }
      >
        TOP
      </button>
    </div>
  )
}
