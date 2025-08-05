import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import MainContent from './components/Main/maincontent';
import './App.css';
import JokeList from './components/jokes/JokeList.jsx';
import About from './components/About/About.jsx';

function HomePage({ setJokes, setIsLoading, setError }) {
  const navigate = useNavigate();

  const handleGetJokes = async (formValues) => {
    const { language, type, amount, id } = formValues;
    
    // Basic validation
    if (!type || !language) {
      setError('Please select both joke type and language');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Build URL with URLSearchParams for proper encoding
      const params = new URLSearchParams();
      params.append('lang', language);
      
      if (id) {
        params.append('idRange', id);
      } else {
        params.append('amount', amount || 10); // Default to 10 jokes
      }

      const url = `https://v2.jokeapi.dev/joke/${encodeURIComponent(type)}?${params.toString()}`;
      console.log('Fetching from:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch jokes. Status: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle API-specific errors
      if (data.error) {
        throw new Error(data.message || 'Joke API error');
      }
      
      // Handle both single joke and multiple jokes response
      const jokesData = data.jokes || (data.id ? [data] : []);
      
      if (!jokesData.length) {
        throw new Error('No jokes found matching your criteria');
      }

      setJokes(jokesData);
      navigate('/jokes');
    } catch (error) {
      console.error('Error fetching jokes:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return <MainContent onGetJokes={handleGetJokes} />;
}

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
     <Router>
      <div className="app">
        <Navbar />

        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            Loading jokes...
          </div>
        )}

        {error && (
          <div className="error-banner">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                setJokes={setJokes}
                setIsLoading={setIsLoading}
                setError={setError}
              />
            } 
          />
          <Route 
            path="/jokes" 
            element={
              <JokeList 
                jokes={jokes}
                error={error}
                isLoading={isLoading}
              />
            } 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;