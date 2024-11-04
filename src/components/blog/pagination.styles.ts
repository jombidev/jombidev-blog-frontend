import styled from 'styled-components';
import Link from 'next/link';

export const MergedGrid = styled.div`
    margin-top: 12px;
    
    height: 2rem;
    display: flex;
    
    font-size: 24px;
    gap: 15px;
`;

export const StateChangeButton = styled(Link)<{ $state: boolean }>`
    pointer-events: ${props => props.$state ? "none" : "auto"};
    color: ${props => props.$state ? "#ccc" : "black"};
`;