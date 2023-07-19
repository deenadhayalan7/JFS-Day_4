import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css'
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"><Link to={'/Home'}>Log In</Link></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}><Link to={'/Register'}>Don't have an account? Register here.</Link></button>
        </div>
    )
}

export default Login;