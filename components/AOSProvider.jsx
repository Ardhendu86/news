'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}