import path from 'path'
import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vitest/config'
import { injectImportingIslands } from '../src/vite/inject-importing-islands'
import { islandComponents } from '../src/vite/island-components'

const appDir = '/mocks'
const islandDir = '/mocks/[^/]+/islands'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../mocks/app-alias'),
      'honox/vite': path.resolve(__dirname, '../src/vite'),
    },
  },
  plugins: [
    islandComponents({
      islandDir,
    }),
    injectImportingIslands({
      islandDir,
      appDir,
    }),
    mdx({
      jsxImportSource: 'hono/jsx',
    }),
  ],
})
