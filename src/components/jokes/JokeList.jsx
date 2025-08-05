import React from "react";
import "./JokeList.css";
import ShinyText from "../ShinyText/ShinyText.jsx";

function JokeList({ jokes, isLoading, error }) {
  const renderJokes = () => {
    if (isLoading) {
      return <p className="loading">Loading jokes...</p>;
    }

    if (error) {
      return <p className="error">Error: {error}</p>;
    }

    // Handle case when jokes is null/undefined
    if (!jokes) {
      return <p className="no-jokes">No jokes to display</p>;
    }

    // Handle array of jokes (multiple jokes response)
    if (Array.isArray(jokes)) {
      return jokes.map((joke) => (
        <div key={joke.id} className="joke-card">
          <p className="joke-content">
            {joke.type === "twopart" ? (
              <>
                {joke.setup}
                <br />
                <strong className="delivery">{joke.delivery}</strong>
              </>
            ) : (
              joke.joke
            )}
          </p>
          <div className="joke-meta">
            <span>Category: {joke.category}</span>
            <span>ID: {joke.id}</span>
          </div>
        </div>
      ));
    }

    // Handle single joke object
    if (jokes.id) {
      return (
        <div className="joke-card">
          <p className="joke-content">
            {jokes.type === "twopart" ? (
              <>
                {jokes.setup}
                <br />
                <strong className="delivery">{jokes.delivery}</strong>
              </>
            ) : (
              jokes.joke
            )}
          </p>
          <div className="joke-meta">
            <span>Category: {jokes.category}</span>
            <span>ID: {jokes.id}</span>
          </div>
        </div>
      );
    }

    return <p className="no-jokes">No jokes found</p>;
  };

  return (
    <div className="jokes-container">
      <h1 className="jokes-title">Your Jokes</h1>
      <div className="jokes-list">{renderJokes()}</div>
      <a href="/" className="get-more">
        {" "}
        
Get More Jokes

       
      </a>
    </div>
  );
}

export default JokeList;
