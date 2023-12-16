import { defineConfig } from 'vite';
import includeHtml from "./vite-html-multiplier-changer";


export default defineConfig({
    plugins: [
        includeHtml(),
    ],
    server: {
        port: 3000, 
    },
    css: {
        devSourcemap: true, 
    },
    
});
