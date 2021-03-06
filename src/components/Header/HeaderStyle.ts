import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #023e8a;
  min-width: 100%;
  height: 125px;
  border-bottom: 1px solid #f5f8fa;

  nav {
    visibility: hidden;
    width: 50px;
    left: 50px;
    display: flex;
    flex: 2;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-bottom: 15px;
  }
  .logo {
    display: flex;
    margin-top: 20px;
    margin-left: 60px;
    height: 96.32px;
    width: 75px;
    margin-bottom: 15px;
  }
  .logout {
    font-size: 18px;
    display: flex;
    align-items: center;
    height: 25px;
    width: 70px;
    border: 1px solid #f5f8fa;
    border-radius: 15px;
    background-color: #f5f8fa;
    color: #023e8a;
    cursor: pointer;
  }
  .user {
    color: #f5f8fa;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-right: 60px;
    gap: 10px;
    margin-bottom: 15px;
  }

  @media (min-width: 600px) {
    nav {
      font-size: 16px;
      visibility: visible;
      display: flex;
      flex: 2;
      justify-content: space-around;
      align-items: flex-end;
      margin-bottom: 15px;
      margin-left: 70px;
    }
    .logo {
      display: flex;
      margin-top: 20px;
      margin-left: 50px;
      height: 96.32px;
      width: 75px;
      margin-bottom: 15px;
    }
    .logout {
      font-size: 14px;
      margin-top: 4px;
      display: flex;
      align-items: center;
      height: 20px;
      width: 60px;
      border: 1px solid #f5f8fa;
      border-radius: 15px;
      background-color: #f5f8fa;
      cursor: pointer;
    }
    .user {
      font-size: 20px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      align-content: center;
      margin-right: 20px;
      gap: 15px;
      margin-bottom: 15px;
    }
    a {
      text-decoration: none;
      color: #f5f8fa;
    }
  }
`;

export default HeaderContainer;
