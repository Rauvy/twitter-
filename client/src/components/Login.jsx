import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Dialog from './Dialog';
import Signup from './Signup';
import "../../public/styles/login.css";

function Login() {
  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div className="vh-100 container">
      {/* Left Section */}
      <div className="left-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="x-logo"
        >
          <path
            d="M18 2h3.5L10 19.5 24 40H17L6 24 2 40H-1L13.5 19.5-1 2H7L17.5 17 26 2z"
            fill="#e7e9ea"
          ></path>
        </svg>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="header">
          <h1 className="header-title">Happening now</h1>
          <h2 className="header-subtitle">Join today.</h2>
        </div>

        {/* Buttons */}
        <div className="buttons-container">
          <button className="google-sign-in">
            <FontAwesomeIcon icon={faGoogle} />
            Sign up with Google
          </button>

          <button className="apple-sign-in">
          <FontAwesomeIcon icon={faApple} />
            Sign up with Apple
          </button>
        </div>

        <div className="divider">or</div>

        <button className="create-account" onClick={()=>{
            setDialogContent(<Signup />);
            toggleDialog();
        }}>Create account</button>

        <div className="login-container buttons-container">
          <p>Already have an account?</p>
          <button className="signup">
            Sign in
          </button>
        </div>
      </div>
      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          {dialogContent}
      </Dialog>
    </div>
  );
}

export default Login;
