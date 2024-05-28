import React, { useState } from 'react';
import { register } from '../services/authService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('karyawan');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password, role);
            alert('Registration successful');
        } catch (error) {
            alert('Error registering');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="karyawan">Karyawan</option>
                <option value="guest">Guest</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
