import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules = config.module.rules.filter(
            (rule:any): rule is { test: RegExp } =>
                typeof rule === "object" && !!rule.test && !rule.test.toString().includes("svg")
        );

        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;