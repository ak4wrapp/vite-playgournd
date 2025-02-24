import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js", // Ensure this is the correct entry filename
      exposes: {
        "./RemoteComponent": "./src/RemoteComponent", // Exposing the RemoteComponent correctly
      },
      shared: ["react", "react-dom"], // Ensure shared dependencies (e.g., react) are shared
    }),
  ],
});

/*
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/RemoteComponent",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

*/
