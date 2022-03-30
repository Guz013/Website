/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	extends: ['plugin:@next/next/recommended'],
	async redirects() {
		return [
			{
				source: '/2022',
				destination: '/202X',
				permanent: true,
			},
			{
				source: '/2023',
				destination: '/202X',
				permanent: true,
			},
		];
	},
};
