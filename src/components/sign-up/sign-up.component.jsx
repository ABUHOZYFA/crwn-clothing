import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component';



class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password don't match");

            return;
        }
        try{

            const { user } = auth.createUserWithAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(error){
            console.log(error);
        }
    };

    handleChange = event => {
        const { name , Value} = event.target;
        this.setState({[name]: Value});
    };

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    Value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    Value={email}
                    onChange={this.handleChange}
                    label='email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    Value={password}
                    onChange={this.handleChange}
                    label='password'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    Value={confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>  
        );
    }

}

export default SignUp;