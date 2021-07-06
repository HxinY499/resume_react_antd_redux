import styled from 'styled-components'

export const NavItemWrapper = styled.li`
  width: 100%;
  a{
    display: block;
    font-size: 1.5em;
    width: 100%;
    padding: 0.5em 0;
    margin: 0.5em 0;
    color: #444444;
    transition: all 0.3s;
    span{
      margin-left: 0.9em;
    }
    :hover{
      background-color: var(--nav-active);
    }
    &.active{
      background-color: var(--nav-active);
    }
  }
`