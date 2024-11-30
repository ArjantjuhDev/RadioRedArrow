import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}',
   'node_modules/preline/dist/*.js',],

	theme: {
		extend: {},
    container: {
      center: true,
    },
		screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
	},
	daisyui: {
    themes: true,
	 darkMode: true,
    },
	plugins: [typography, containerQueries, require('daisyui'),require('preline/plugin')]
};
