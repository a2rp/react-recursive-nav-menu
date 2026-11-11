import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-recursive-nav-menu/",
  plugins: [react()],
});
