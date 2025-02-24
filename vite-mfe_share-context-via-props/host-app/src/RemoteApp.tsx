import React, { Suspense, useContext } from "react";
import { useAuth } from "./context/AuthContext";
import ErrorBoundary from "./ErrorBoundary";

const RemoteComponent = React.lazy(() => import("remote/RemoteComponent"));

const RemoteApp: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading remote app...</div>}>
        <RemoteComponent
          isAuthenticated={isAuthenticated}
          login={login}
          logout={logout}
        />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteApp;
