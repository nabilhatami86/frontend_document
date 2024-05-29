import React, { useState } from 'react';
// import { register } from '../services/authService';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('')
    const Navigate = useNavigate()

    const registerUser = () => {

        if (!email || !password || !role) {
            return setError('Data form User harus di isi semua')
        }

        const rergexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!rergexEmail.test(email.toString())) {
            return setError('Email tidak valid')
        }

        const data = { email, password, role }

        axios.post('http://localhost:5000/register', data)
            .then(() => {
                Navigate('/login');
                alert("registrasi berhasil")
            })
            .catch((err) => {
                console.log(err)
            })
    }

        

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="karyawan">Staff</option>
                <option value="guest">Guest</option>
            </select>
            <button  onClick={()=>registerUser()}>Register</button>
        </div>
    );
};

export default Register;
