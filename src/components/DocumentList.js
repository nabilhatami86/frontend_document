import React, { useState, useEffect } from 'react';
import { fetchDocuments } from '../services/documentService';

const DocumentList = () => {
    const [documents, setDocuments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedDocuments, setSortedDocuments] = useState([]);

    useEffect(() => {
        fetchAllDocuments();
    }, []);

    const fetchAllDocuments = async () => {
        try {
            const response = await fetchDocuments();
            setDocuments(response.data);
            setSortedDocuments(response.data);
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setSortedDocuments(documents);
        } else {
            const filteredDocuments = documents.filter(doc => 
                doc.document.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSortedDocuments(filteredDocuments);
        }
    };

    return (
        <div className="document-list">
            <input
                type="text"
                placeholder="Search documents"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {sortedDocuments.map(doc => (
                    <li key={doc.id} className="document-item">
                        <a href={doc.document} target="_blank" rel="noopener noreferrer">{doc.document}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;
