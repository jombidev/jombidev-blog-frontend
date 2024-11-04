"use client";

import styled from 'styled-components';
import bocchi from '@/static/bocchi.png';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    
    align-self: center;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DescriptionArea = styled.span`
    line-break: unset;
`;

export const Space = styled.div`
    width: 10%;
    height: 10%;
`;

export const Image = styled.img`
    content: url(${bocchi.src});
    padding-left: 20px;
    width: 320px;
`;

export const Heading = styled.p`
    margin-top: -10px;
    font-weight: 600;
    font-size: 48px;
`;

export const Medium = styled.p`
    font-weight: 500;
`;