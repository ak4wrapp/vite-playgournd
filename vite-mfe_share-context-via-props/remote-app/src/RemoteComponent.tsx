import React from 'react';

interface RemoteComponentProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({ isAuthenticated, login, logout }) => {
  return (
    <div>
      <h2>Remote App</h2>
      {isAuthenticated ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default RemoteComponent;