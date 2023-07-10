import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import SignupForm from './SignupForm'; // Import the SignupForm component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email,password) => {
    console.log(email);
    console.log(password);
    setLoggedIn(true);
  };
  const handleRegistration = () => {
    setLoggedIn(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul>
          {!isLoggedIn && (
            <li>
              <Link classNam to="/login">Login</Link>
              <Link to="/sign-up">Create Account </Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/home">Student</Link>
              </li>
              <li>
                <Link to="/about">Performance</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/sign-up"
          element={isLoggedIn ? <Home /> : <SignUpForm onSignUp={handleRegistration} />}
        />
        {/* <Route path="/signup" element={<SignupForm />} /> New Route for SignupForm */}
      </Routes>
    </Router>
  );
};

export default App;
