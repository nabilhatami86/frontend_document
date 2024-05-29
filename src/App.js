import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';
import Navbar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/upload" element={<DocumentUpload />} />
                    <Route path="/documents" element={<DocumentList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
