/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				ijt: {
					base: '#F8F9FA',      // Putih Tulang (Main BG)
					surface: '#FFFFFF',   // Putih Murni (Card BG)
					dark: '#1A1C20',      // Hitam Arang (Premium, bukan #000)
					gray: '#4B5563',      // Abu-abu teks bacaan (Anti-lelah)
					lightgray: '#E5E7EB', // Border halus
					gold: '#D4AF37',      // Metallic Gold (Lebih elegan)
					goldhover: '#B5952F',
                    accent: '#F3F4F6'     // Section highlight
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], 
			},
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
            }
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}