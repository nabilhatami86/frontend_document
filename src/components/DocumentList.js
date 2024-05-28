import React, { useState, useEffect } from 'react';
import { fetchDocuments } from '../services/documentService';

const DocumentList = () => {
    const [documents, setDocuments] = useState([]);
    const [sortOrder, setSortOrder] = useState('ASC');

    const getDocuments = async (order) => {
        try {
            const response = await fetchDocuments(order);
            setDocuments(response.data);
        } catch (error) {
            alert('Error fetching documents');
            console.error(error);
        }
    };

    useEffect(() => {
        getDocuments(sortOrder);
    }, [sortOrder]);

    return (
        <div>
            <button onClick={() => setSortOrder('ASC')}>Fetch Documents A-Z</button>
            <button onClick={() => setSortOrder('DESC')}>Fetch Documents Z-A</button>
            <div className="document-list">
                {documents.map((doc, index) => (
                    <div key={index} className="document-item">
                        <a href={doc.document} target="_blank" rel="noopener noreferrer">
                            {doc.document}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentList;
