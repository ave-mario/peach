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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      name: '',
      surname: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { attemtToSignUp } = this.props;
    const { phoneNumber, name, surname } = this.state;
    attemtToSignUp(phoneNumber, name, surname);
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
          <FormHeaderText>SignUp</FormHeaderText>
          <CrossButton onClick={close}>×</CrossButton>
        </FormHeader>
        <FormBody>
          <p>Please, enter your information:</p>
          <FormInput
            placeholder="email or phone number"
            name="phoneNumber"
            onChange={this.handleChange}
          />
          <FormInput
            placeholder="First Name"
            name="name"
            onChange={this.handleChange}
          />
          <FormInput
            placeholder="Last Name"
            name="surname"
            onChange={this.handleChange}
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

SignUp.propTypes = {
  attemtToSignUp: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignUp;
