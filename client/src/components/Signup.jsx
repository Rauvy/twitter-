import react from 'react';
import DatePicker from './DatePicker';
import "../../public/styles/signup.css";
function Signup() {
    return (
        <div className='signUp'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="x-small"
        >
          <path
            d="M18 2h3.5L10 19.5 24 40H17L6 24 2 40H-1L13.5 19.5-1 2H7L17.5 17 26 2z"
            fill="black"
          ></path>
        </svg>
            <p>Create your account</p>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Email'></input>
            <DatePicker />
            <button className='next-button'>Next</button>
        </div>
    );
}

export default Signup;