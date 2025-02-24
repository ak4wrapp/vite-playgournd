import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@ak4upskill/core-component": "/node_modules/@ak4upskill/core-component/",
      // "react-component-library": "/node_modules/react-component-library",
    },
  },
});
