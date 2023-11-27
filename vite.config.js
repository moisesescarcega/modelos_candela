import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	ssr: { noExternal: ['three'] },
	plugins: [sveltekit()],
        server: {
            fs: {
                allow: ["/bolsa_mexicana_de_valores.glb"]
            }
        }
    
});
