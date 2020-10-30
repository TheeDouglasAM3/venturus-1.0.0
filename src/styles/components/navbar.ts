import styled from 'styled-components'

export const Container = styled.div`
  nav {
    width: 100vw;
    height: 3.6rem;
    background: linear-gradient(90deg, #f2295b 0%, #532d8c 100%);
    color: #FFF;
    padding: 1.2rem 1.2rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .project-name {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav .project-name img {
    height: 2.8rem;
  }

  nav .project-name span {
    padding-left: 0.8rem;
  }

  nav .user-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.4rem;
  }

  nav .user-profile #profile-image {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background: #F2F2F2;
    color: #0A0A0A;
    text-align: center;
    line-height: 2.8rem;
  }
`
