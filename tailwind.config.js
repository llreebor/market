/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '20px',
		},
		extend: {
			screens: {
				xs: '375px',
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
			},
			colors: {
				black: {
					400: '#333',
				},
				green: {
					300: '#D9EDBF',
					400: '#ACEAAC',
					500: '#28A028',
				},
				orange: {
					50: '#FAF3F0',
					400: '#FF9800',
				},
			},
			boxShadow: {
				light: '0px 20px 30px 0px rgba(0, 0, 0, 0.10);',
			},
			backgroundImage: {
				map: 'url(../img/map.png)',
				'map-gradient':
					'linear-gradient(180deg, rgba(51, 51, 51, 0.00) 66%, rgba(51, 51, 51, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
