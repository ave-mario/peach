import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  position: relative;
  :disabled {
    opacity: 0.4;
  }
  ${props =>
    props.main &&
    css`
      background-color: transparent;
      margin-right: 30px;
      margin-top: 20px;
      color: #fff;
      opacity: 0.8;
      font-size: large;
      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 20%;
        height: 20%;
        border: 2px solid;
        transition: all 0.6s ease;
        border-radius: 2px;
      }
      &::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      &::before {
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      &:hover::after,
      &:hover::before {
        border-bottom-color: #fff;
        border-right-color: #fff;
        border-top-color: #fff;
        border-left-color: #fff;
        width: 100%;
        height: 100%;
      }
    `}
  ${props =>
    props.cancel &&
    css`
      background-color: transparent;
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

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  display: flex;
  align-items: baseline;
`;

export { Button, CrossButton, Wrapper };
