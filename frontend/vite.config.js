import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({

  // server: {
  //   port: 5173,
  //   strictPort: true // Prevents switching to another port
  // },

  plugins: [

    react(),

    tailwindcss()

  ],

  server: {

    allowedHosts: ['a9d1-14-195-19-210.ngrok-free.app', 'localhost']

}

})