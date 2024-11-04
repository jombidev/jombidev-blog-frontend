import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const RootContainer = styled(Link)`
    width: auto;
    height: 140px;
    
    display: flex;
    flex-direction: row;

    border-radius: 12px;
    border: #ccc 1px solid;
    background-color: #fff;
`;

export const TextContainer = styled.div`
    margin: 12px;
    
    display: flex;
    flex-direction: column;
    
    gap: 3px;
    
    flex: 1;
    min-width: 0;
`;

export const TitleP = styled.span`
    font-size: 36px;
    font-weight: 600;

    width: 100%;
    max-width: 100%;
    
    overflow: hidden;
    white-space: nowrap;
    
    text-overflow: ellipsis;
    flex-shrink: 0;
`;

export const ContentP = styled.span`
    font-size: 14px;
    font-weight: 500;
    
    min-height: 0;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ImageContainer = styled.div`
    height: 85%;
    aspect-ratio: 16 / 9;
    align-self: center;
    flex-shrink: 0;
  
    margin-left: 12px;
`;

export const ImageInner = styled(Image)`
    position: relative !important;
    border-radius: 8px;
`;