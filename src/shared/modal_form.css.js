import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 2;
  color: white;
  top: 20%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all 0.8s;
  width: 300px;
  left: calc(50% - 150px);
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.8);
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: 2px;
    border: 2px solid;
    border-radius: 2px;
    border-color: #fff;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
  &::before {
    top: 0;
    left: 0;
  }
`;

const Header = styled.div`
  border-radius: 20px 20px 0 0;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
`;

const HeaderLabel = styled.h3`
  color: white;
  float: left;
  margin: 0;
  padding: 0;
`;

const Form = styled.form`
  padding: 10px 15px;
  text-align: center;
`;

const Input = styled.input`
  padding: 8px 16px;
  color: #fff;
  background: transparent;
  margin: 2px;
  height: 24px;
  outline: none;
  width: 80%;
  border-radius: 16px;
  ${props =>
    props.code &&
    css`
      font-size: 20px;
      padding-left: 20px;
      letter-spacing: 20px;
      text-align: center;
    `}
`;

const Footer = styled.div`
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: center;
  height: 35px;
  padding: 15px;
`;

export { Wrapper, Header, Form, Footer, HeaderLabel, Input };
