import '../../Styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const navigate = useNavigate(); // Using useNavigate for redirection

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showUser, setShowUser] = useState(false);
  const [error, setError] = useState('');

  const disableAlert = () => {
  };

  const resetForm = () => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUser(false);
    setError('');
    navigate('/home');
  };


  return (
    <>
    {showUser && (
         <div
           className="alert alert-success alert-dismissible fade show"
           role="alert"
         >
           {email}
         </div>
       )}
       {error && (
         <div
           className="alert alert-danger alert-dismissible fade show"
           role="alert"
         >
           {error}
         </div>
       )}

      <div className="auth-form-container">
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '3.5em', paddingTop: '25px',paddingBottom: '25px'}} className="sec-2-font fw-boldS">LOGIN HERE</h1>
         <form className="login-form" onSubmit={handleSubmit}>
           <label htmlFor="email">Username</label>
           <input
             value={email}
             type="email"
             name="email"
             id="email"
             data-testid="email"
             onChange={(e) => setEmail(e.target.value)}
             autoComplete="off"
             placeholder="Enter your Email Id"
           />
           <br />

           <label htmlFor="password">Password</label>
           <input
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             type="password"
             name="password"
             id="password"
             placeholder="*********"
           />

           <button
             onClick={disableAlert()}
             className="my-2 btn bg-light"
             id="btn"
             type="submit"
           >
             Login
           </button>
           <button
             className="link-btn"
             onClick={() => props.onFormSwitch("register")}
           >
             Don't have any account?, Click here to Register
           </button>
         </form>
         <button
           onClick={() => {
             resetForm();
             disableAlert();
           }}
           className="my-2 btn bg-light"
           id="btn"
           data-testid="reset"
         >
           Reset Form
         </button>
      </div>
    </>
  );
};

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };
  
  export default Login;


