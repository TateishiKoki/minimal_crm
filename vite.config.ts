// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // React系なら

export default defineConfig({
  plugins: [react()],
  base: '/minimal_crm/',   // ★ Pagesの公開サブパス
})
