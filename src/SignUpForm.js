import './signup.css';
import {Link} from "react-router-dom";

const SignUpForm = ({ onSignUp }) => {
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const firstname = e.target.elements.fname.value;
      const lastname = e.target.elements.lname.value;
      const email = e.target.elements.email.value;
      const phoneNumber = e.target.elements.number.value;
      const password = e.target.elements.password.value;}
    return (
      <div className="box">
        <div className="form">
          <h2>Create New Account</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="inputBox">
              <input type="text" name="fname" required="required" />
              <span>First Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="lname" required="required" />
              <span>Last Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="email" name="email" required="required" />
              <span>Email Address</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="number" name="number" required="required" />
              <span>Phone Number</span>
              <i></i>
            </div>
            
            <div className="inputBox">
              <input type="password" name="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required="required" />
              <span>Confirm Password</span>
              <i></i>
            </div>
            {/* <div className="links">
              <a href="#">Forgot Password</a>
              <Link to="/signup">Signup</Link> 
            </div> */}
            <input type="submit" value="Sign Up" />
            <p className="bottom-label">Already have an account ? <Link to={"/login"} className='bottom-link' href="">Login</Link> </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUpForm;
  