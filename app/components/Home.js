'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Home() {
  const pathname = usePathname();
  const isDark = pathname === '/dark-mode';

  return (
    <div className={clsx('container', { 'dark-mode': isDark })}>
      <h1>{isDark ? 'Dark Mode Activated' : 'Light Mode Activated'}</h1>

      <Link href="/dark-mode">
        <button>Dark-Mode</button>
      </Link>

      <Link href="/light-mode">
        <button>Light-Mode</button>
      </Link>
    </div>
  );
}
