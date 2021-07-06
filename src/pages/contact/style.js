import styled from 'styled-components'

export const ContactWrapper = styled.div`
  .little-title{
    text-align: center;
    font-size: 1.5em;
    color: var(--font-color);
    margin-top: -2.5em;
    letter-spacing: 0.2em;
  }
  .phone, .email{
    text-align: center;
    font-size: 2em;
    color: var(--font-color);
  }
  .phone{
    margin-top: 1em;
  }
  .email{
    margin-bottom: 2em;
  }
  .other-contact{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      font-size: 3em;
      display: inline-block;
      text-align: center;
      border-radius: 50%;
      padding: 2em;
      cursor: pointer;
      background-color: #232a31;
      margin-right: 10px;
      font-size: 20px;
      transition: all 0.3s;
      span{
        font-size: 4em;
        color: var(--font-color);
        transition: all 0.3s;
      }
      :hover{
        background-color: #000;
        span{
          color: #fff;
        }
      }
      
    }
  }
`
