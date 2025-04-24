import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://flask-backend-wagq.onrender.com/api/quote")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Quote of the Day</h1>
      <button className="quote-button" onClick={() => window.location.reload()}>
        Get Quote
      </button>
      <p className="quote-text">{quote}</p>
    </div>
  );
}

export default App;
