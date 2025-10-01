// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Quantum Student UBB',
          favicon: '/favicon.svg',
          logo: {
            src: './src/assets/isotipo.svg',
            replacesTitle: true,
          },
		  customCss: [
			'./src/styles/global.css',
		  ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BenjaminAGH' }],
          sidebar: [
			  {
                  label: 'Cursos',
                  items: [
                      { label: 'Presentación del Apartado', slug: 'cursos/example' },
					  {
						label: 'Comuniación de Redes',
						items: [
							{ label: 'Modelos en Capa', slug: 'cursos/crc/intro' }
						],
					  },
                  ],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});