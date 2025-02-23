import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import postcssInlineSVG from 'postcss-inline-svg';
import svgLoader from 'vite-svg-loader';

export default defineConfig(({ mode }) => {
 const env = loadEnv(mode, process.cwd());
 return {
   define: {
     'process.env': env,
   },
   plugins: [
     svgLoader()
   ],
   css: {
     postcss: {
       plugins: [
        postcssInlineSVG({
            paths: [path.resolve(__dirname, '../../_base/assets/svg')],
        }),
       ],
     },
     preprocessorOptions: {
       scss: {
         additionalData: '@use "@base/scss/mixins.scss" as *;',
         silenceDeprecations: ["import", "mixed-decls"],
       },
     },
   },
   resolve: {
     alias: {
       '@base': path.resolve(__dirname, '../../_base'),
     },
   },
 };
});