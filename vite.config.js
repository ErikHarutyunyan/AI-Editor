import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
    // viteImagemin({
    //   gifsicle: { optimizationLevel: 2 }, // Optimization level for GIF images (0 to 3)
    //   optipng: { optimizationLevel: 5 }, // Optimization level for PNG images (0 to 7)
    //   mozjpeg: { quality: 70 }, // Quality setting for JPEG images (0 to 100)
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: false,
    //       },
    //     ],
    //   }, // Configuration options for SVGO optimization
    //   webp: { quality: 80 }, // Quality setting for WebP images (0 to 100)
    // }),
    eslint(),
  ],
  // server: {
  //   port: 3000,
  //   host: true
  // },
});
