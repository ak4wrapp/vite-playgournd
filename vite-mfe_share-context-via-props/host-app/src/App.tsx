import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const RemoteAppLazy = React.lazy(() => import("./RemoteApp")); // Lazy load remote app
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Host App</h1>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/remote">Remote App</Link>
                    </li>
                  </ul>
                </nav>
              </>
            }
          />
          <Route path="/remote" element={<RemoteAppLazy />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
