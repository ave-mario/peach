import React from 'react';

import StyledSignUp from "./sign_up.css";

const SignUp = (props) => {
    return (
        <StyledSignUp>
            <div className="signUp-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100px)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="signUp-header">
                    <h3>SignUp</h3>
                    <span className="signUp-close-btn" onClick={props.close}>×</span>
                </div>
                <div className="signUp-body">
                    <p>
                        Please, enter your information:
                    </p>
                    <input className="signUp-input" placeholder="email or phone number"></input>
                    <input className="signUp-input" placeholder="First Name"></input>
                    <input className="signUp-input" placeholder="Last Name"></input>
                </div>
                <div className="signUp-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </StyledSignUp>
    )
}

export default SignUp;