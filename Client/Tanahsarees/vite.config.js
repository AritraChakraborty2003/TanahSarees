import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path"; // ✅ Import path module
import { fileURLToPath } from "url"; // ✅ Fix __dirname issue

const __filename = fileURLToPath(import.meta.url); // ✅ Define __filename
const __dirname = path.dirname(__filename); // ✅ Define __dirname

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Fixes the alias issue
    },
  },
});
