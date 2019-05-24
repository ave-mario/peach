import React from 'react';

import StyledSignIn from "./sign_in.css";

const SignIn = (props) => {
    return (
        <StyledSignIn>
            <div className="signIn-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100px)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="signIn-header">
                    <h3>Login</h3>
                    <span className="signIn-close-btn" onClick={props.close}>×</span>
                </div>
                <div className="signIn-body">
                    <p>
                        Please, enter your phone number:
                    </p>
                    <input className="signIn-input" placeholder="email or phone number"></input>
                </div>
                <div className="signIn-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </StyledSignIn>
    )
}

export default SignIn;