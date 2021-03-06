import styled from "styled-components";
const DetailPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    background-color: #023e8a;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
  .add {
    visibility: hidden;
    height: 60px;
    width: 60px;
    margin-right: 70px;
    margin-bottom: 50px;
  }

  @media (min-width: 600px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    main {
      background-color: #023e8a;
      height: 100vw;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default DetailPageContainer;
