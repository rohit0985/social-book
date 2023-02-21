import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="authLeft">
        <img src={Logo} alt="logo" />
        <div className="webname">
          <h1>Social Book</h1>
          <h6>Explore the ideas throughout the world...</h6>
        </div>
      </div>
      {/* <SigUp /> */}
      <LogIn/>
    </div>
  );
};

function SigUp() {
  return (
    <div className="authRight">
      <form className="infoform authform">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div>
            <span style={{fontSize:"12px"}}>Already have an account? Login!</span>
        </div>
        <button className="button info-button" type=" submit">Signup</button>
      </form>
    </div>
  );
}

function LogIn() {
  return (
    <div className="authRight">
      <form className="infoform authform">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
            <span style={{fontSize:"12px"}}>Don't have an account? Login!</span>
        </div>
        <button className="button info-button" type=" submit">Login</button>
      </form>
    </div>
  );
}

export default Auth;
