import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {NavItemWrapper} from './style'
import { Tooltip } from 'antd'

export default memo(function NavItem(props) {
  const { icon, title, link } = props
  return (
    <Tooltip title={title} placement="right" trigger={"hover"}>
      <NavItemWrapper>
        <NavLink to={link}>
          {icon}
          <span className="text">{title}</span>
        </NavLink>
      </NavItemWrapper>
    </Tooltip>
  )
})
