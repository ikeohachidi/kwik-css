import scss from 'rollup-plugin-scss';

export default {
	input: 'boot.js',
	output: {
		file: 'index.css',
		format: 'esm'
	},
	plugins: [
		scss({
			output: 'kwik.css',
			outputStyle: 'compressed'
		})
	]
}