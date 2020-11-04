import styled from 'styled-components'

export const Container = styled.div`
  table { 
    border-spacing: 0px;
    text-align: left;
    width: 100%;
    padding: 1.8rem;
  }

  table tr th:first-child,  
  table tr td:first-child {
      border-top-left-radius: 10px; 
      border-bottom-left-radius: 10px;
  }
  
  table tr th:last-child, 
  table tr td:last-child {
      border-bottom-right-radius: 10px; 
      border-top-right-radius: 10px; 
  }

  table tr th,
  table tr td{
    padding: 1.2rem;
  }

  table tr:hover{
    background: #F0F0F0;
    color: #f2295b;
  }

  table tr #name-column {
    width:25%
  }

  .description{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description .action-buttons{
    display: flex;
    column-gap: 0.8rem;
    cursor: pointer;
  }

  .hide {
    visibility: hidden;
  }
`
