import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/IvanHenriquez96/Portfolio-vite/",
  // base: "/Portfolio-vite/",
  // base: "https://IvanHenriquez96.github.io/Portfolio-vite/",
});
