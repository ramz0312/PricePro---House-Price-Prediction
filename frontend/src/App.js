import React from 'react';
import './App.css'; 

function App() {
  const [prediction, setPrediction] = React.useState('Loading...');

  // Placeholder for fetching prediction from your Python/Flask backend
  const fetchPrediction = async () => {
    try {
      setPrediction('Ready to connect to ML Backend API (Flask on port 5000)');
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setPrediction('API Connection Error');
    }
  };

  React.useEffect(() => {
    fetchPrediction();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PricePro 💰</h1>
        <p>Real Estate Prediction and Investment Engine</p>
        <div className="prediction-box">
          Status: **{prediction}**
        </div>
        <p>
          Start building your React components here!
        </p>
      </header>
    </div>
  );
}

export default App;
