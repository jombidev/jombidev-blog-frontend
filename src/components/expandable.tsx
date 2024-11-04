'use client';

import React from 'react';
import { isMobile } from 'react-device-detect';
import { RxHamburgerMenu } from 'react-icons/rx';
import * as E from '@/components/expandable.styles';

export default function Expandable({ children }: { children: React.ReactNode }) {
    return isMobile ? (
        <>
            <E.Hamburger popoverTarget="body">
                <RxHamburgerMenu/>
            </E.Hamburger>
            <E.PopOver popover="auto" id="body">
                <E.HamburgerBody>{children}</E.HamburgerBody>
            </E.PopOver>
        </>
    ) : children;
}