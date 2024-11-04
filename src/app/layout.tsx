'use client';

import StyledComponentsRegistry from '@/lib/registry';
import React from 'react';
import { Pretendard } from '@/lib/pretendard';
import { createGlobalStyle } from 'styled-components';
import Header from '@/components/header';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        ${Pretendard.style};
    }
    
    a, a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <StyledComponentsRegistry>
            <GlobalStyle/>
            <Header/>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}