import React, { memo } from 'react'

import {ResumeTitleWrapper} from './style'

export default memo(function ResumeTitle(props) {
  const { title } = props
  return (
    <ResumeTitleWrapper>
      {title}
    </ResumeTitleWrapper>
  )
})
