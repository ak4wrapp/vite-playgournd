import ReactDOM from "react-dom/client";
import RemoteComponent from "./RemoteComponent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RemoteComponent
    isAuthenticated={false}
    login={function (): void {
      throw new Error("Function not implemented.");
    }}
    logout={function (): void {
      throw new Error("Function not implemented.");
    }}
  />
);
