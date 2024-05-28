import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';
import Login from './components/login';
import Register from './components/register';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/upload" element={<DocumentUpload />} />
                    <Route path="/documents" element={<DocumentList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
