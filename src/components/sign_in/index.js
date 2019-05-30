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
    const { attemtLogin } = this.props;
    const { phoneNumber } = this.state;
    e.preventDefault();
    attemtLogin(phoneNumber);
  }

  render() {
    const { show, close } = this.props;
    return (
      <ModalForm
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100px)',
          opacity: show ? '1' : '0',
        }}
      >
        <FormHeader>
          <FormHeaderText>Login</FormHeaderText>
          <CrossButton onClick={close}>×</CrossButton>
        </FormHeader>
        <FormBody>
          <p>Please, enter your phone number:</p>
          <FormInput
            placeholder="email or phone number"
            onChange={this.handleChange}
            name="phoneNumber"
          />
        </FormBody>
        <FormFooter>
          <Button cancel onClick={close}>
            CLOSE
          </Button>
          <Button continue onClick={this.handleSubmit}>
            CONTINUE
          </Button>
        </FormFooter>
      </ModalForm>
    );
  }
}

SignIn.propTypes = {
  attemtLogin: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignIn;
