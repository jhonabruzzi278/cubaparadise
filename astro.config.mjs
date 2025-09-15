// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cubaparadise.com',
  build: {
    inlineStylesheets: 'never',
  }
});