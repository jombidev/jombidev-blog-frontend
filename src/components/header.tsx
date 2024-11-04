'use client';

import * as H from '@/components/header.styles';
import Expandable from '@/components/expandable';

export default function Header() {
    return (
        <H.Container>
            <H.LeftPanel href="/">
                <H.Icon/>
                <H.Heading>Jombi</H.Heading>
            </H.LeftPanel>
            <H.RightPanel>
                <Expandable>
                    <H.Item href="/">Home</H.Item>
                    <H.Item href="/blog">Blog</H.Item>
                    <H.Item href="/portfolio">Portfolio</H.Item>
                </Expandable>
            </H.RightPanel>
        </H.Container>
    );
}
