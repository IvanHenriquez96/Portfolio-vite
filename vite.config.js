import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Portfolio-vite/", //para subirlo a Netlify hay que quitar este base
});
