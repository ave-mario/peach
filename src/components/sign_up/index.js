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
      email: '',
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
    const { email, phoneNumber, name, surname } = this.state;
    attemtToSignUp(email, phoneNumber, name, surname);
  }

  render() {
    const { close } = this.props;
    return (
      <ModalForm>
        <FormHeader>
          <FormHeaderText>SignUp</FormHeaderText>
          <CrossButton onClick={close}>×</CrossButton>
        </FormHeader>
        <FormBody onSubmit={this.handleSubmit} className="formBody">
          <p>Please, enter your information:</p>
          <FormInput
            placeholder="Email"
            name="email"
            className="email"
            onChange={this.handleChange}
          />
          <FormInput
            placeholder="Phone number"
            name="phoneNumber"
            className="phoneNumber"
            onChange={this.handleChange}
          />
          <FormInput
            placeholder="First Name"
            name="name"
            className="name"
            onChange={this.handleChange}
          />
          <FormInput
            placeholder="Last Name"
            className="surname"
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
  close: PropTypes.func.isRequired,
};

export default SignUp;
