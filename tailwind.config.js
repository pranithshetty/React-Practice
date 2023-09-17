/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "24px 24px 48px #acacac,-24px -24px 48px #dcdcdc",
			},
		},
	},
	plugins: [],
};
