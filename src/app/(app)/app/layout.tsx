import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import BackgroundPattern from '@/components/BackgroundPattern';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />
      <div className='flex flex-col mx-auto max-w-[1050px] px-4 min-h-screen'>
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
