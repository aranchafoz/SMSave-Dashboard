import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #0d47a1;
  color: #fff;

  .logo {
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;

    .icon {
      height: 35px;
      padding-right: 16px;
    }

    .label {
      height: 22px;
    }
  }
  .user {
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: 16px;

    img {
      height: 18px;
      margin-right: 16px;
    }
  }
`;
