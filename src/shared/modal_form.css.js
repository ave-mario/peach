import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  border-radius: 20px;
  position: fixed;
  z-index: 2;
  top: 20%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all 0.8s;
  width: 300px;
  left: calc(50% - 150px);
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.8);
`;

const Header = styled.div`
  background: #263238;
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
  margin: 2px;
  height: 24px;
  outline: none;
  width: 80%;
  border-radius: 16px;
  border-color: black;
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
  height: 35px;
  padding: 15px;
`;

export { Wrapper, Header, Form, Footer, HeaderLabel, Input };
