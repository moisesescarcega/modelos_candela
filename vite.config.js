import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	ssr: { noExternal: ['three'] },
	plugins: [sveltekit()],
        server: {
            fs: {
                allow: ["/home/moi/Documentos/aresdi/svelte/modelos_candela/static/bolsa_mexicana_de_valores.glb"]
            }
        }
    
});
