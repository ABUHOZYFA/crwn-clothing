import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';


import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(Props){
        super(Props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = event => {

        const { Value , name} = event.target;
        this.setState({[name] : Value})
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleChange}>
                    <FormInput 
                      name='email'
                      type='email'
                      handleChange={this.handleChange}
                      Value={this.state.email}
                      lable='email'
                      required
                      />
                    <FormInput
                      name='password'
                      type='password'
                      handleChange={this.handleChange}
                      Value={this.state.password}
                      lable='password'
                      required
                      />
                      <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;