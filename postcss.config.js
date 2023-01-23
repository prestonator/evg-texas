const options = {
	breakpoint: 3000,
	breakpointUnit: 'px',
};

module.exports = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		"postcss-media-minmax": {},
		"rfs": {options},
		tailwindcss: {},
		autoprefixer: {},
	},
};
