/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{css,ts,js,tsx,jsx,html}"],
	theme: {
		extend: {
			backgroundImage: {
				f: "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphandroid.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fgalaxy-wallpaper-1.jpg&f=1&nofb=1')",
				kedi: "url('/images/goodCatPng.png')",
			},
		},
	},
	plugins: [],
};
