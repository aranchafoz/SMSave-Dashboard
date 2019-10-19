import styled from "styled-components";

export const PopupInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  min-width: 300px;
  padding: 8px;

  .time {
    font-size: 14px;
    color: #757575;
  }
  .msg {
    margin: 0;
    margin-bottom: 30px;
  }
  .source {
    color: #0096ff;
  }
  .category {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
  }
`;
