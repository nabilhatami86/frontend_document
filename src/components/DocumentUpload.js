import React, { useState } from 'react';
import { uploadDocument } from '../services/documentService';

const DocumentUpload = () => {
    const [document, setDocument] = useState(null);

    const handleFileChange = (e) => {
        setDocument(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (document) {
            try {
                await uploadDocument(document);
                alert('Document uploaded successfully');
            } catch (error) {
                alert('Error uploading document');
                console.error(error);
            }
        } else {
            alert('Please select a document to upload');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Upload Document</button>
        </form>
    );
};

export default DocumentUpload;
