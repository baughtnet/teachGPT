import React, { useState } from 'react';
import { Dropzone } from 'react-dropzone';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile || !question) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('question', question);

    try {
      const { data } = await axios.post('/api/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Teacher's Chat Assistant</h1>
      <div className="upload-section">
        <label htmlFor="file">Upload PDF document:</label>
        <Dropzone onDrop={handleFileInputChange} accept="application/pdf">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop a PDF file here, or click to select</p>
            </div>
          )}
        </Dropzone>
      </div>
      <div className="question-section">
        <label htmlFor="question">Ask your question:</label>
        <input
          type="text"
          id="question"
          placeholder="Enter your question about the document..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} disabled={!selectedFile || !question}>
        Analyze Document
      </button>
      {isLoading && <p className="loading">Loading response...</p>}
      {response && <div className="response">{response}</div>}
    </div>
  );
}

export default App;
