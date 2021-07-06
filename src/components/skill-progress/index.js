import React, { memo } from 'react'
import {SkillProgressWrapper} from './style'

import { Progress } from 'antd';

export default memo(function SkillProgress(props) {
  const {skill, percent} = props
  return (
    <SkillProgressWrapper>
      <span className="skill">{skill}</span>
      <Progress percent={percent}></Progress>
    </SkillProgressWrapper>
  )
})
