import * as fs from "fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from 'path';
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig(({ mode }) => {
  const publicPath = mode === "production" ? "/" : "/";
  const config = {
    devServer: {proxy: 'http://localhost', port: 8080},
    plugins: [vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'lottie-player' || tag === 'modal',
        },
      },
    }), vueJsx(), EnvironmentPlugin("all")],
    base: publicPath,
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    server: {
      port: 8000,
    },
  };
  return config;
});
