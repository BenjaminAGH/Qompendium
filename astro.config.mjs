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
                { label: 'Protocolos de Red', slug: 'cursos/crc/protocolo' },
                { label: 'Modelos de Referencia', slug: 'cursos/crc/intro' },
                { label: 'Capa de Aplicación',
                  items: [
                    { label: 'Protocolo DHCP',  slug: 'cursos/crc/aplicacion/dhcp' },
                    { label: 'Protocolo FTP',  slug: 'cursos/crc/aplicacion/ftp' },
                    { label: 'Actividad 1',  slug: 'cursos/crc/aplicacion/aplicacion', badge: { text: 'Actividad', variant: 'danger' } },
                    { label: 'Actividad 2',  slug: 'cursos/crc/aplicacion/tarea2', badge: { text: 'Actividad', variant: 'danger' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Proyectos',
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