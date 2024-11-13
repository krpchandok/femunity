import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import wasm from 'vite-plugin-wasm';
import wasmPack from 'vite-plugin-wasm-pack';

export default defineConfig({
  plugins: [react(), wasm(), wasmPack()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
