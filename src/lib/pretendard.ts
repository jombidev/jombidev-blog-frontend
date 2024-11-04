import localFont from 'next/font/local';

export const Pretendard = localFont({
    src: [
        {
            path: '../static/fonts/pretendard/Pretendard-Black.woff2',
            weight: '900',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-ExtraBold.woff2',
            weight: '800',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-ExtraLight.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../static/fonts/pretendard/Pretendard-Thin.woff2',
            weight: '100',
            style: 'normal'
        },
    ],
    fallback: ["Pretendard Variable", "Pretendard", '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'sans-serif'],
    display: 'swap',
});