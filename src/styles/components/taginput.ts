import styled from 'styled-components'

export const TagInputContainer = styled.div`
  .react-tag-input {
    background: white;
    color: #333;
    border: solid 2px #CDCDCD;
    border-radius: 0.4rem;
    min-height: 8rem;
    display: flex;
    align-items: flex-start;
  }
  .react-tag-input__input {
    background: transparent;
    color: #333;
  }
  .react-tag-input__input::placeholder, .react-tag-input__input:-moz-placeholder, .react-tag-input__input:-ms-input-placeholder, .react-tag-input__input::-moz-placeholder, .react-tag-input__input::-webkit-input-placeholder {
    color: #333; /* Input placeholder */ 
  }
  .react-tag-input__tag {
    background: #f2295b;
    color: #FFF;
    border-radius: 20px;
  }
  .react-tag-input__tag__remove {
    background: #f2295b;
    border-radius: 20px;
  }
  .react-tag-input__tag__remove:before, .react-tag-input__tag__remove:after {
    background: #FFF; /* X icon in remove button */
  }
`
