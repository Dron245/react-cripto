import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/react-cripto",
  plugins: [react()],
  css: {
	devSourcemap: true // <-- works
 }

})
