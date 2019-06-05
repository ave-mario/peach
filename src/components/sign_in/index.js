import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CrossButton } from '../../shared/buttons.css';
import {
  ModalForm,
  FormHeader,
  FormBody,
  FormFooter,
  FormHeaderText,
  FormInput,
} from '../../shared/modal_form.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { attemtLogin } = this.props;
    const { phoneNumber } = this.state;
    // TODO: redo loginCode after implementing at API
    const loginCode = '123456';
    attemtLogin(phoneNumber, loginCode);
  }

  render() {
    const { close } = this.props;
    return (
      <ModalForm>
        <FormHeader>
          <FormHeaderText>Login</FormHeaderText>
          <CrossButton onClick={close}>×</CrossButton>
        </FormHeader>
        <FormBody onSubmit={this.handleSubmit} className="formBody">
          <p>Please, enter your phone number:</p>
          <FormInput
            placeholder="email or phone number"
            onChange={this.handleChange}
            name="phoneNumber"
            className="phoneNumber"
          />
        </FormBody>
        <FormFooter>
          <Button cancel onClick={close}>
            CLOSE
          </Button>
          <Button continue onClick={this.handleSubmit} type="submit">
            CONTINUE
          </Button>
        </FormFooter>
      </ModalForm>
    );
  }
}

SignIn.propTypes = {
  attemtLogin: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignIn;
