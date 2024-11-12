/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.jombi.dev',
                port: '',
                pathname: '**/*'
            }
        ]
    },
    transpilePackages: [
        "next-mdx-remote"
    ]
};

export default nextConfig;
