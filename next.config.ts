import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		disableStaticImages: true,
	},

	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /.png/,
			loader: import.meta.resolve("./loader/my-png-webpack-loader.js"),
			options: {
				isServer,
			},
		});

		return config;
	},

	/* config options here */
	reactStrictMode: true,
};

export default nextConfig;
