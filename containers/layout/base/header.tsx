'use client';

import { Cart3 } from '@solar-icons/react'
import { Heart } from '@solar-icons/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between gap-2 border-b py-4">
        <Link href="/">
          <p className="text-xl font-semibold">ecommerce</p>
        </Link>
        <div className="flex items-center gap-2.5">
          <Heart className="size-6" />
          <Cart3 className="size-6" />
        </div>
      </div>
    </header>
  );
};
