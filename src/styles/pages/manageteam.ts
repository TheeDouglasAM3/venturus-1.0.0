import styled from 'styled-components'

import bgFootball from '../../images/bgfootballx.png'

export const Container = styled.main`

  .form-field-name {
    margin-bottom: 0.8rem;
  }

  #page-manage-team {
    width: 100vw;
    height: auto;
    padding: 5.4rem 1.8rem 0rem 1.8rem; 
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.6rem;
    grid-template-areas: 
      "form"
      "footer"
    ;
  }

  #page-manage-team .border-area {
    width: 100%;
    background: #FFF;
    border: solid 1px #EEE;
    border-radius: 0.8rem;
  }

  #page-manage-team #create-your-team {
    grid-area: form;

    min-height: 32rem;
  }

  #page-manage-team .border-area header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #page-manage-team .border-area header h2{
    padding: 1.8rem;
  }

  #page-manage-team .border-area header a{
    margin: 1.2rem 1.8rem 1.2rem 0rem;
  }

  #page-manage-team .border-area header h2 {
    color: #532d8c;
  }

  .form-div {
    display:flex;
    justify-content: center;
    padding: 0rem 12rem 0rem 12rem;
    column-gap: 6rem;
  }

  .form-div .fields-area{
    width: 100%;
    display:flex;
    flex-direction:column;
  }

  .radio-area {
    display: flex;
    align-items: center;
  }

  .radio-line {
    margin-right: 6rem;
  }

  #position-players {
    width: 24rem;
    height: 36rem;
    margin-bottom: 2rem;
    border-radius: 1rem;

    background-image: url('${bgFootball}'), linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    display: grid;
    grid-template-columns: 100px 100px 100px;
    justify-content: center;
    align-items: center;
    align-self: center;
    column-gap: 3%;
  }

  #position-players span {
    width: 6rem;
    height: 6rem;
    margin: 0.1rem;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10rem;
    font-size: 2rem;
    font-weight: 700;
    color: #FFF;
    border: dashed 2px #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  #position-players span:hover{
    background: rgba(255, 61, 61, 0.6);
  }

  h3 {
    color: #A9A9A9;
    display: flex;
    justify-content: center;
    margin: 1.8rem 0rem 1.8rem 0rem;
  }

  textarea {
    min-height: 12.8rem;
  }

  input[type="text"],
  select,
  textarea {
    width: 100%;
    margin-bottom: 2.8rem;
    border-radius: 0.4rem;
    padding: 0.6rem 0.8rem 0.6rem 0.8rem;
    border: solid 2px #CDCDCD;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border: solid 2px #f2295b;
    outline: none;
    box-shadow: none;
  }

  button[type="submit"] {
    background: linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
    border: none;
    width: 24rem;
    color: #FFF;
    padding: 0.6rem;
    align-self: center;
    margin-bottom: 1.8rem;
    border-radius: 0.4rem;
    margin-bottom: 6rem;

    cursor: pointer;
  }

  button[type="submit"]:hover {
    box-shadow: 3px 11px 16px -10px rgba(0,0,0,0.5);
  }

  input[type="text"] {
    min-height: 1.2rem;
  }

  input:checked ~ label{
    color: #f2295b;
  }

  select {
    font-size: 1.1rem;
  }

  input[type='radio'] {
    -webkit-appearance:none;
    width:14px;
    height:14px;
    border:1px solid darkgray;
    border-radius:50%;
    outline:none;
    margin-right: 0.2rem;
  }

  input[type='radio']:before {
    content:'';
    display:block;
    width:100%;
    height:100%;   
    border-radius:50%;     
  }

  .hide-circle {
    visibility: hidden;
  }

  input[type='radio']:checked:before {
    background: linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
  }

  #players-list .player-info {
    background: linear-gradient(180deg, #FAFAFA 24%, #A9A9A9 100%);
    padding: 1rem;
    line-height: 2rem;
    border: dashed 2px #CDCDCD;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    cursor: pointer;
  }

  #players-list .player-info span {
    color: #f2295b;
  }

  @media (max-width: 1000px) {
    .form-div {
      display:flex;
      flex-direction: column;
      padding: 0rem 1.2rem 0rem 1.2rem;
    }

    .form-div .fields-area{
      width: 100%;
      display:flex;
      flex-direction:column;
    }

  }

  @media (max-width: 600px) {
    #page-manage-team {
      padding: 5.4rem 1rem 0rem 1rem; 
    }
    #page-manage-team, #page-manage-team #create-your-team {
      width: 96%;
    }
  }
`
