declare module "remote/RemoteComponent" {
  const RemoteComponent: React.ComponentType<{
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }>;
  export default RemoteComponent;
}
