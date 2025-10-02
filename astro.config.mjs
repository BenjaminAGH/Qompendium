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
          badge: 'Académico',
          items: [
            { label: 'Presentación del Apartado', slug: 'cursos/example' },
            {
              label: 'Comuniación de Redes',
              items: [
                { label: 'Glosario', slug: 'cursos/crc/glosario' },
                { label: 'Modelos de Referencia', slug: 'cursos/crc/intro' }
              ],
            },
          ],
        },
        { label: 'Proyectos',
          badge: { text: 'Quantum', variant: 'success' },
          items: [
            { label: 'Presentación del Apartado', slug: 'proyectos/intro' },          
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});