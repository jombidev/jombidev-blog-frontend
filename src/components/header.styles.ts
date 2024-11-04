'use client';

import styled from 'styled-components';
import bocchi from '@/static/bocchi.png';
import { UbuntuSans, UbuntuSansMono } from '@/lib/ubuntu-sans';
import Link from 'next/link';

export const Container = styled.div`
    z-index: 50;
    position: fixed;
    
    width: 100%;
    padding: 0 10%;
    height: 6rem;

    display: flex;
    justify-content: space-between;
    background-color: white;
`;

export const LeftPanel = styled(Link)`
    ::before {
        padding-left: 20px;
    }
    display: flex;
    align-items: center;
    
    gap: 10px;
`;
export const RightPanel = styled.div`
    display: flex;
    align-items: center;
    
    gap: 20px;
    padding-right: 20px;
`;

export const Icon = styled.img`
    content: url(${bocchi.src});
    
    width: 50px;
    height: 50px;
`;

export const Heading = styled.span`
    ${UbuntuSansMono.style};
    font-size: 32px;
    color: black;
`;

export const Item = styled(Link)`
    ${UbuntuSans.style};
    font-size: 24px;
    color: black;
`;