import React, { memo, useEffect, useState, shallowEqual } from 'react'
import { useSelector } from 'react-redux'

import { CSSTransition } from "react-transition-group";
import {DetailWrapper} from './style'
import Experience from '../../components/experience'
import SkillProgress from '../../components/skill-progress'
import ResumeTitle from '../../components/resume-title'
import MyDrawer from '../../components/my-drawer'

export default memo(function Detail(props) {
  const [show, setShow] = useState()

  const state = useSelector(state => ({
    eduExp: state.eduExp,
    schoolExp: state.schoolExp,
    programExp: state.programExp,
    skill: state.skill
  }), shallowEqual)
  
  useEffect(()=>{
    if(props.location.pathname.slice(1) === "detail"){
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
        <DetailWrapper className="content">
          <div className="title">
            RESUME
          </div>
          <div className="insert">
            <MyDrawer btnText={"添加"}/>
          </div>
          <div className="resume-content">
            <div className="resume-item">
              <ResumeTitle title="教育经历"></ResumeTitle>
              {
                state.eduExp&&state.eduExp.map((item, index)=>{
                  return (
                    <Experience key={index} data={item} type={"eduExp"}></Experience>
                  )
                })
              }
            </div>
            <div className="resume-item">
              <ResumeTitle title="在校经历"></ResumeTitle>
              {
                state.schoolExp&&state.schoolExp.map((item, index)=>{
                  return (
                    <Experience key={index} data={item} type={"schExp"}></Experience>
                  )
                })
              }
            </div>
            <div className="resume-item">
              <ResumeTitle title="项目经历"></ResumeTitle>
              {
                state.programExp&&state.programExp.map((item, index)=>{
                  return (
                    <Experience key={index} data={item} type={"proExp"}></Experience>
                  )
                })
              }
            </div>
            <div className="resume-item">
              <ResumeTitle title="专业技能"></ResumeTitle>
              {
                state.skill&&state.skill.map((item, index) => {
                  return (
                    <SkillProgress key={index} percent={item.percent} skill={item.skill}/>
                  )
                })
              }
            </div>
          </div>
        </DetailWrapper>
      </div>
    </CSSTransition>
  )
})
