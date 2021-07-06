import React, { memo, useEffect, useState, shallowEqual } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSSTransition } from "react-transition-group";
import {AboutWrapper} from './style'
import {Image, Modal, Input} from 'antd'
import {getChangeIntrAction} from '../../store/actionCreators'

export default memo(function About(props) {
  const [show, setShow] = useState()
  const [intr, setIntr] = useState()
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const state = useSelector(state => ({
    introduce: state.introduce
  }), shallowEqual)

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleOk = () => {
    dispatch(getChangeIntrAction(intr))
    setIsModalVisible(false)
  }

  const inputChange = (e) => {
    setIntr(e.target.value)
  }

  useEffect(()=>{
    if(props.location.pathname.slice(1) === "about"){
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
        <AboutWrapper className="content">
          <div className="title">
            ABOUT ME
          </div>
          <div className="about-content">
            <div className="photo">
              <Image width={250} src={require('../../assets/images/avatar.jpg').default}/>
            </div>
            <div className="description">
              {state.introduce}
            </div>
            <div className="intr-edit" onClick={()=>{setIsModalVisible(true)}}>编辑</div>
          </div>
        </AboutWrapper>
        <Modal title="自我介绍" 
               visible={isModalVisible} 
               onCancel={handleCancel} 
               onOk={handleOk}
               cancelText={"取消"}
               okText={"提交"}>
          <Input.TextArea rows={4} onChange={inputChange} defaultValue={state.introduce}/>
        </Modal>
      </div>
    </CSSTransition>
  )
})
