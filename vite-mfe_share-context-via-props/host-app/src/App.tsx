import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RemoteApp from './RemoteApp';  // Placeholder for remote app component

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Host App</h1>} />
          <Route path="/remote" element={<RemoteApp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;