import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api/dota-leaderboard': {
        target: 'https://www.dota2.com',
        changeOrigin: true,
        rewrite: () =>
          '/webapi/ILeaderboard/GetDivisionLeaderboard/v0001?division=europe&leaderboard=0',
      },
    },
  },
})