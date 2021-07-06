import React, { memo, useEffect, useState } from 'react'

import { CSSTransition } from "react-transition-group";
import {ContactWrapper} from './style'
import { 
  HomeOutlined, 
  GithubOutlined, 
  QqOutlined, 
  WechatOutlined
} from '@ant-design/icons'
import {Popover} from 'antd'

export default memo(function Contact(props) {
  console.log(props.route)
  const [show, setShow] = useState()
  const [visibleQQ, setVisibleQQ] = useState(false)
  const [visibleWE, setVisibleWE] = useState(false)

  useEffect(()=>{
    if(props.location.pathname.slice(1) === "contact"){
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
      <div className="main-content">
        <ContactWrapper className="content">
          <div className="title">
            CONTACT ME
          </div>
          <div className="little-title">非常期待您的回复</div>
          <div className="phone">15147839220</div>
          <div className="email">8381952422qq.com</div>
          <div className="other-contact">
            <a href="https://github.com/HxinY499" title="github" className="item">
              <GithubOutlined/>
            </a>
            <a href="http://hxiny.gitee.io" title="blog" className="item">
              <HomeOutlined />
            </a>
            <Popover
              content={<img src={require('../../assets/images/qq.jpg').default} alt="扫我加好友" className="call"/>}
              title="QQ"
              trigger="click"
              placement="top"
              visible={visibleQQ}
              onVisibleChange={()=>{setVisibleQQ(!visibleQQ)}}>
              <span title="QQ" className="item">
                <QqOutlined />
              </span>
            </Popover>
            <Popover
              content={<img src={require('../../assets/images/wechat.jpg').default} alt="扫我加好友" className="call"/>}
              title="wechat"
              trigger="click"
              placement="top"
              visible={visibleWE}
              onVisibleChange={()=>{setVisibleWE(!visibleWE)}}>
              <span title="wechat" className="item">
                <WechatOutlined />
              </span>
            </Popover>
          </div>
        </ContactWrapper>
      </div>
    </CSSTransition>
  )
})
