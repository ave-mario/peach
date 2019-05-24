import styled from 'styled-components';

const Modal = styled.div`
  .signIn-wrapper {
    background: white;
    border: 1px solid #d0cccc;
    border-radius: 20px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    margin: 100px auto 0;
    transition: all 0.8s;
    width: 300px;
  }

  .signIn-header {
    background: #263238;
    border-radius: 20px 20px 0 0;
    height: 40px;
    line-height: 40px;
    padding: 5px 20px;
    text-align: right;
  }

  .signIn-header h3 {
    color: white;
    float: left;
    margin: 0;
    padding: 0;
  }

  .signIn-body {
    padding: 10px 15px;
    text-align: center;
  }

  .signIn-input {
    padding: 8px 16px;
    height: 24px;
    outline: none;
    width: 80%;
    border-radius: 16px;
    border-color: black;
  }

  .signIn-footer {
    border-radius: 0 0 20px 20px;
    height: 35px;
    padding: 15px;
  }

  .signIn-close-btn {
    color: white;
    cursor: pointer;
    float: right;
    font-size: 34px;
    transition: 1s;
    margin: 0;
  }

  .signIn-close-btn:hover {
    color: #ce2d45;
    transform-origin: center center;
    transform: rotate(360deg);
  }

  .btn-cancel,
  .btn-continue {
    background: coral;
    border: none;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 10px;
  }

  .btn-cancel {
    background-color: #ffffff;
    color: red;
    float: left;
  }

  .btn-continue {
    background: linear-gradient(to right, #159957 0%, #155799 51%, #159957 100%);
    background-size: 200%;
    transition: 0.75s;
    border-radius: 5px;
    color: white;
    float: right;
  }

  .btn-continue:hover {
    background-position: right center;
  }

  .signIn-open-btn {
    margin: 15px;
    padding: 10px;
    font-weight: bold;
  }
`;

export default Modal;
