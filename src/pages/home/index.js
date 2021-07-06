import React, { memo, useEffect, useState } from 'react'

import { CSSTransition } from "react-transition-group";
import {HomeWrapper} from './style'

export default memo(function Home(props) {
  const [show, setShow] = useState()

  useEffect(()=>{
    if(props.location.pathname.slice(1) === "home"){
      setShow(true)
    }else{
      setShow(false)
    }
  },[props])
  return (
    <CSSTransition classNames="ani"
                in={show}
                timeout={500}
                unmountOnExit={true}>
      <HomeWrapper className="home">
        <div className="home-info">
          <div className="name">何欣宇</div>
          <div className="job">前端开发工程师 个人简历</div>
        </div>
      </HomeWrapper>
    </CSSTransition>
  )
})
