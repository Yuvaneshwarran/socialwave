import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [daisyui],

// 	daisyui: {
// 		themes: [
// 			"light",
// 			{
// 				black: {
// 					...daisyUIThemes["black"],
// 					primary: "rgb(29, 155, 240)",
// 					secondary: "rgb(24, 24, 24)",
// 				},
// 			},
// 		],
// 	},
// };
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
	  'data-theme-black', 
	  'bg-black', 
	  'text-white'
	],
	theme: {
	  extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
		  "light",
		  {
			black: {
			  ...daisyUIThemes["black"],
			  primary: "rgb(29, 155, 240)",
			  secondary: "rgb(24, 24, 24)",
			  "base-100": "#000000", // Ensure the background is set explicitly
			  "base-content": "#ffffff", // Text color for contrast
			},
		  },
		],
	  },
	  
};
  