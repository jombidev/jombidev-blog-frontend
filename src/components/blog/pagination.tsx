"use client";

import PagedList from '@/types/paged.dto';
import * as P from '@/components/blog/pagination.styles';
import Link from 'next/link';

export default function Pagination({ total, hasNext, page }: PagedList<any>) {
    return (
        <P.MergedGrid>
            <P.StateChangeButton href={`/blog?page=${page}`} $state={page === 0}>
                &lt;
            </P.StateChangeButton>

            {[...Array(total).keys()].map(it => (
                <Link key={it} href={`/blog?page=${it + 1}`}>{it + 1}</Link>
            ))}

            <P.StateChangeButton href={`/blog?page=${page + 2}`} $state={!hasNext}>
                &gt;
            </P.StateChangeButton>
        </P.MergedGrid>
    );
}