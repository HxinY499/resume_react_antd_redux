import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  .home-info{
    padding: 50vh 0 0 10vw;
    .name{
      color: #fff;
      font-weight: 700;
      font-size: 4em;
      letter-spacing: 0.5em;
      margin-bottom: 0.3em;
    }
    .job{
      color: #fff;
      font-size: 2em;
      font-weight: 700;
      width: 11.5em;
      white-space: nowrap;
      overflow: hidden;
      animation: widths 1.2s steps(11);
    }
  }
  
`
