// src/DownloadForm.js
import React, { useState } from 'react';
import axios from 'axios';

function DownloadForm() {
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/download`, {
                params: { url }
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Failed to download video: ' + error.message);
        }
    };
// scp -r /build ec2-user@ec2-16-171-151-234.eu-north-1.compute.amazonaws.com:/home/ec2-user/

    return (
        <div className='container'>
            <h1>YouTube Video Downloader</h1>
            <form onSubmit={handleSubmit}>
                <div className={'div'}>
                <label>
                    YouTube URL:
                    
                </label>
                
                <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className={'input'}
                    />
                    
                <button type="submit">Download</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default DownloadForm;
