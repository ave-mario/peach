import styled from 'styled-components';

const ModalForm = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  border-radius: 20px;
  position: absolute;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all 0.8s;
  width: 300px;
  left: calc(50% - 150px);
`;

const FormHeader = styled.div`
  background: #263238;
  border-radius: 20px 20px 0 0;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
`;

const FormHeaderText = styled.h3`
  color: white;
  float: left;
  margin: 0;
  padding: 0;
`;

const FormBody = styled.form`
  padding: 10px 15px;
  text-align: center;
`;

const FormInput = styled.input`
  padding: 8px 16px;
  margin: 2px;
  height: 24px;
  outline: none;
  width: 80%;
  border-radius: 16px;
  border-color: black;
`;

const FormFooter = styled.div`
  border-radius: 0 0 20px 20px;
  height: 35px;
  padding: 15px;
`;

export {
  ModalForm,
  FormHeader,
  FormBody,
  FormFooter,
  FormHeaderText,
  FormInput,
};
