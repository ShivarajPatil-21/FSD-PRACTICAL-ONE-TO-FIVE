import React from 'react';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert(data.message);
                }
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="email">
                        Email{' '}
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="password">
                    <label className="form__label" htmlFor="password">
                        Password{' '}
                    </label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginPage;
