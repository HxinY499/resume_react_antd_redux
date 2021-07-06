import styled from 'styled-components'

export const DetailWrapper = styled.div`
  position: relative; 
  .insert{
    position: absolute;
    right: 5em;
    top: 5em;
  }
  .resume-content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 0.5em;
    
    .resume-item{
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`
