import React, { memo, useState } from 'react'
import { renderRoutes } from "react-router-config"
import { BrowserRouter } from "react-router-dom"
import classnams from 'classnames'

import routes from "../../router"
import {AppWrapper} from './style'
import NavItem from '../../components/nav-item'

import { 
  HomeOutlined, 
  FileTextOutlined, 
  UserOutlined, 
  MailOutlined ,
  DoubleRightOutlined,
  DoubleLeftOutlined,
  BulbOutlined
} from '@ant-design/icons'

export default memo(function App(props) {
  const [isMore, setIsMore] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  const changeTheme = function(){
    let mainElement = document.documentElement;
    if(darkTheme === true){
      mainElement.style.setProperty("--nav-light", "#1c222b")
      mainElement.style.setProperty("--main-light", "#252d3a")
      mainElement.style.setProperty("--font-black", "#888")
      mainElement.style.setProperty("--nav-active", "#0d1117")
    }else if(darkTheme === false){
      mainElement.style.setProperty("--main-light", "#fff")
      mainElement.style.setProperty("--nav-light", "#eeeeee")
      mainElement.style.setProperty("--font-black", "#000")
      mainElement.style.setProperty("--nav-active", "#d0d0d0")
    }
    setDarkTheme(!darkTheme);
  }
  
  return (
    <AppWrapper>
      <BrowserRouter>
        <div className={classnams({"nav-wrapper":true, "is-more":isMore})}>
          <div className="avatar">
            <img src={require("../../assets/images/avatar.jpg").default} alt="avatar"/>
          </div>
          <ul className="navbar">
            <NavItem title="个人主页" link="/home" icon={<HomeOutlined />}></NavItem>
            <NavItem title="自我介绍" link="/about" icon={<UserOutlined />}></NavItem>
            <NavItem title="个人简历" link="/detail" icon={<FileTextOutlined />}></NavItem>
            <NavItem title="联系方式" link="/contact" icon={<MailOutlined />}></NavItem>
          </ul>
          <div className="more" onClick={()=>{setIsMore(!isMore)}}>
            {
              isMore ? <DoubleLeftOutlined /> : <DoubleRightOutlined />
            }
          </div>
        </div>
        {renderRoutes(routes)}
        <div className="change-theme" onClick={()=>{changeTheme()}}
          title={!darkTheme?"开灯":"关灯"}><BulbOutlined /></div>
      </BrowserRouter>
    </AppWrapper>
  )
})
