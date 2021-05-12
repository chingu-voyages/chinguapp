import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


  return (
    <div>
        <p>Login Page</p>
        <Link to='/'>Home Page</Link>
        <Link to='login'>Login Page</Link>
        <Link to='dashboard'>Dashboard Page</Link>
        <Link to='signup'>Signup Page</Link>
    </div>
  );
};

export default Login