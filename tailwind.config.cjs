const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@catppuccin/tailwindcss')({
		defaultFlavour: 'macchiato'
	})]
};

module.exports = config;
