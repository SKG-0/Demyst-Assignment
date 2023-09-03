/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			primaryBlue: "#132235",
			primarySkiedBlue: "#61C2AB",
			secondaryLightBlue: "#132235",
			...colors,
		},
		fontFamily: {
			Inter: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
