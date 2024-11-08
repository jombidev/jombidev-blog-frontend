/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '**/*'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '**/*'
            }
        ]
    },
    transpilePackages: [
        "next-mdx-remote"
    ]
};

export default nextConfig;
