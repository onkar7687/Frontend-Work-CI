import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register/', { username, password1, password2 });
            alert(response.data.message);
        } catch (error) {
            alert('Error registering');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="Password" />
            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
