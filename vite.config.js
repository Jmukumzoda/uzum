// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                basket: resolve(__dirname, 'pages/basket/index.html'),
                Favorite: resolve(__dirname, 'pages/Favorite/index.html'),
                pagetitle: resolve(__dirname, 'pages/pagetitle/index.html'),
                shop: resolve(__dirname, 'pages/shop/index.html'),
                signin: resolve(__dirname, 'pages/signin/index.html'),
                singup: resolve(__dirname, 'pages/singup/index.html'),
            },
        },
    },
})