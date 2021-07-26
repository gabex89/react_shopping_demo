import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sing-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='text' value={this.state.email} handleChange={this.handleChange}
                               label='Email'
                               required/>
                    <FormInput name="password" type='password' value={this.state.password} label='Password'
                               handleChange={this.handleChange}
                               required/>
                    <CustomButton type="submit"> SIGN IN </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;