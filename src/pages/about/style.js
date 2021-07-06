import styled from 'styled-components'

export const AboutWrapper = styled.div`
  .about-content{
    position: relative;
    display: flex;
    justify-content: space-between;
    .description{
      margin-left: 1em;
      font-size: 1.5em;
      color: var(--font-color);
    }
  }
  .intr-edit{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: #1890ff;
    padding: 0.3em 1em;
    cursor: pointer;
  }
`