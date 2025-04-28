import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // для запуска локально, необходимо убрать закомментировать строчку с базовым URL
  base: '/react-movie-app',
})
