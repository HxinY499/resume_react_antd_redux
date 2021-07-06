import styled from 'styled-components'

export const AppWrapper = styled.div`
background-image: url(${require("../../assets/images/labuladuo.jpg").default});
background-size: 100vw 100vh;
display: flex;
align-items: center;
justify-content: space-between;
  .nav-wrapper{
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 5vw;
    padding: 1em 0;
    padding-bottom: 0;
    background-color: var(--nav-light);
    transition: all 300ms;
    .avatar{
      width: 3em;
      height: 3em;
      border-radius: 50%;
      overflow: hidden;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .text{
      position: absolute;
      visibility: hidden;
      font-size: 0.8em;
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.3s;
      color: var(--font-black);
    }
    .navbar{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .more{
      position: relative;
      margin-top: auto;
      width: 100%;
      height: 3em;
      cursor: pointer;
      transition: all 0.3s;
      span{
        position: absolute;
        right: 1.5em;
        top: 1em;
        color: var(--font-black);
      }
      :hover{
        background-color: var(--nav-active);
      }
    }
  }
  .is-more{
    width: 20vw;
    .text{
      visibility: visible;
      margin-left: 0.7em;
      transform: translateY(4px);
      opacity: 1;
    }
  }
  .change-theme{
    position: fixed;
    font-size: 1.2em;
    bottom: 1em;
    right: 1em;
    padding: 0.4em 0.8em;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
    background-color: var(--main-light);
    cursor: pointer;
    border-radius: 5px;
    color: var(--font-black);
  }
`