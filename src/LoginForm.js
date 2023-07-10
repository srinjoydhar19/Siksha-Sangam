import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginForm = ({ onLogin }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Perform login validation
    if (username === 'megatron' && password === '1234') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="box">
      <div className="form">
        <h2>LoginForm</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="inputBox">
            <input type="text" name="username" required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          {/* <div className="links">
            <a href="#">Forgot Password</a>
            <Link to="/signup">Signup</Link> 
          </div> */}
          <input type="submit" value="Login" />
          <p className="bottom-label">Don't have an account ? <Link to={"/sign-up"} className='bottom-link' href="">Create new</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
