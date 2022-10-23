import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const port = (env.VITE_PORT || 3000) as number

  return {
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    plugins: [react()],
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) },
    },
    server: { port, host: true },
    css: { preprocessorOptions: { less: { javascriptEnabled: true } } },
    optimizeDeps: {
      include: ['@ant-design/colors', '@ant-design/icons'],
    },

    // mode: process.env ==== 'development'
    // base: '/billing/',
  }
})