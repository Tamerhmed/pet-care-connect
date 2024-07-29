import Branding from '@/components/Branding';
import ContentBlock from '@/components/ContentBlock';
import PetDetails from '@/components/PetDetails';
import PetList from '@/components/PetList';
import SearchForm from '@/components/SearchForm';
import Stats from '@/components/Stats';
import React from 'react';

export default function DashboardPage() {
  return (
    <main>
      <div className='flex items-center justify-between text-white py-8'>
        <Branding />
        <Stats />
      </div>
      <div className='grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]'>
        <div className='row-start-1 row-span-1 col-start-1 col-span-1'>

        <SearchForm />
        </div>
        <div className='row-start-2 row-span-full col-start-1 col-span-1'>

        <ContentBlock>
          <PetList />
        </ContentBlock>
        </div>
        <div className='row-start-1 row-span-full col-start-2 col-span-full'>

        <ContentBlock>
          <PetDetails />
        </ContentBlock>
        </div>
      </div>
    </main>
  );
}
