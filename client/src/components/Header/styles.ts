import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195c;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    paddin: 0;
    font-size: 40px;
  }

  p {
    font-size: 20px;
    color: #b8b8d4;
  }

  button {
    font-size: 15px;
    padding: 10px;
    border-radius: 10%;
    cursor: pointer;
    background-color: #CCC;
    opacity: 0.75;
    letter-spacing: 1.8px;
  }

  button:hover {
    background-color: #888;
    opacity: 1;
  }
`;
