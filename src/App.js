import React, { useState } from 'react';
import USKOPitchDeck from './USKOPitchDeck';
import './App.css';

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'USKOEXP#1') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-6">
      <div className="max-w-md w-full p-4 sm:p-6 bg-white rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-6 sm:mb-8">
          <img 
            src="https://i.imgur.com/J2ME1ji.png" 
            alt="USKO Logo" 
            className="w-36 sm:w-48 drop-shadow-xl"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(235, 0, 40, 0.15))' }}
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Welcome to USKO's Pitch Deck
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Please enter the password to continue
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb0028] focus:border-transparent outline-none transition-all duration-200 text-base sm:text-lg"
              placeholder="Enter password"
              required
            />
          </div>
          {error && (
            <p className="text-[#eb0028] text-sm mt-2 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#eb0028] to-[#ff1a3d] text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-base sm:text-lg"
          >
            Access Pitch Deck
          </button>
        </form>
        <p className="mt-4 text-xs sm:text-sm text-center text-gray-600">
          This presentation is confidential and password protected.
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <PasswordProtection>
      <USKOPitchDeck />
    </PasswordProtection>
  );
}

export default App; 