import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100vw;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: 700;
  position: fixed;
  z-index: 1000;

  .logo {
    max-width: 90%;
    max-height: 90%;
  }

  .nav-text {
    font-size: 150%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
