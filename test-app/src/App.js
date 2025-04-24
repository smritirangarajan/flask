import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://flask-backend-waqq.onrender.com/api/quote")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="App">
      <h1>Random Quote</h1>
      <p>{quote}</p>
    </div>
  );
}

export default App;
