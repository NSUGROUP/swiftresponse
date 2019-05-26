import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component{

    state = {redirect: false}

    submit = (data) => {
      this.setState({redirect: true});
    };

    render(){
      if(this.state.redirect) return <Redirect to='/dashboard' />;
        return(
            <div>
            <h1>Login Page</h1>

            <LoginForm submit={this.submit}/>
            </div>


        );
    }
}



export default LoginPage;
