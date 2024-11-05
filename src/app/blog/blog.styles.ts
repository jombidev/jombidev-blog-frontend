'use client';

import * as G from '@/components/globals.styles';
import styled from 'styled-components';

export const Root = styled(G.Root)`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 140px;
    grid-column-end: span 3;
    gap: 10px;
`;