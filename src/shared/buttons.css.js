import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  :disabled {
    opacity: 0.4;
  }
  ${props =>
    props.cancel &&
    css`
      background-color: #ffffff;
      color: red;
      float: left;
    `}

  ${props =>
    props.continue &&
    css`
      background: linear-gradient(
        to right,
        #159957 0%,
        #155799 51%,
        #159957 100%
      );
      background-size: 200%;
      transition: 0.75s;
      border-radius: 5px;
      color: white;
      float: right;
      &:hover {
        background-position: right center;
      }
    `}
`;

const CrossButton = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 34px;
  transition: 1s;
  margin: 0;
  &:hover {
    color: #ce2d45;
    transform-origin: center center;
    transform: rotate(360deg);
  }
`;

export { Button, CrossButton };
