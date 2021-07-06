import React, { memo } from 'react'
import {useDispatch} from 'react-redux'

import { ExperienceWrapper } from './style'
import MyDrawer from '../my-drawer'

import {timestampToTime} from '../../utils/parse'
import {getDeleteExpAction} from '../../store/actionCreators'
import {Popconfirm} from 'antd'

export default memo(function Experience(props) {
  const {id, title, content, time, place} = props.data
  const {type} = props
  const dispatch = useDispatch()

  const deleteExp = () => {
    dispatch(getDeleteExpAction(id, type))
  }
  return (
    <ExperienceWrapper>
      <div className="experience-title">{title}</div>
      <div className="experience-info">
        <span className="experience-time">{`${timestampToTime(time&&time[0])}/${timestampToTime(time&&time[1])} | `}</span>
        <span className="experience-place">{place}</span>
      </div>
      <div className="experience-content">
        {content}
      </div>
      <div className="experience-control">
        <MyDrawer btnText={"编辑"} data={props.data} edit={true}/>
        <Popconfirm title="确认删除？" okText="是" cancelText="否" onConfirm={deleteExp}>
          <span className="delete">删除</span>
        </Popconfirm>
      </div>
    </ExperienceWrapper>
  )
})
