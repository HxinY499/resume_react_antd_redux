import styled from 'styled-components'

export const ExperienceWrapper = styled.div`
  padding: 1.5em 0;
  color: var(--font-black);
  .experience-title{
    font-size: 1.3em;
    font-weight: 400;
    color: var(--font-black);
  }
  .experience-info{
    color: #888888;
  }
  .experience-control{
    display: flex;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.8);
    float: right;
    margin-right: 0.5em;
    transition: all 0.3s;
    .drawer-format{
      width: 3.4em;
      margin-right: 1em;
      border-radius: 0.5em;
      overflow: hidden;
      padding: 0;
      .ant-btn-primary{
        font-size: 0.8em;
        padding: 0;
        width: 100%;
        text-align: center;
        border: none;
        span{
          padding: 0;
        }
      }
    }
    span{
      font-size: 0.8em;
      padding: 0.5em 1em;
      color: #fff;
      border-radius: 0.5em;
      cursor: pointer;
      &.delete{
        background-color: #f43f54;
      }
    }
  }
  :hover{
    .experience-control{
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
`