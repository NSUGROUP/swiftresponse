import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from "../messages/InlineError";
import PropTypes from 'prop-types';

class LoginForm extends React.Component{

    state = {
        data: {
            email:'',
            password:'',
        },
        loading: false,
        errors:{}
    };

    onChange= temp => this.setState({
        data: {...this.state.data,[temp.target.name]: temp.target.value}
    });

    onSubmit=()=>{

            const errors = this.validate(this.state.data);
            this.setState({errors});

            if(Object.keys(errors).length === 0){
                this.props.submit(this.state.data);

            }

    };

        validate= (data) => {
            const errors = {};
            if(!Validator.isEmail(data.email)) errors.email = "Not Valid Email";
            if(!data.password) errors.password ="Blanks are not Allowed";
            return errors;
        }

    render(){
        const {data, errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlfor="email">Email</label>
                    
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email@email.com"
                    value={data.email}
                    onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email} /> }
                </Form.Field >
                <Form.Field error={!!errors.password}>
                    <label htmlfor="password">Password</label>
                    
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Secure Password"
                    value={data.password}
                    onChange={this.onChange}
                        />
                        {errors.password && <InlineError text={errors.password} /> }
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );

    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;