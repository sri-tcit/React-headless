import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Hero from '@/components/homepage-17/Hero';
import WhatWeOffer from '@/components/homepage-17/WhatWeOffer';
import Process from '@/components/homepage-17/Process';
import FaqTab from '@/components/faq/FaqTab';
import CTA20 from '@/components/homepage-20/CTA';

export const metadata: Metadata = {
  title: 'Card Details - NextSaaS',
};

const CardDetailPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <WhatWeOffer />
        <Process />
        <FaqTab />
        <CTA20 />
      </main>
      <FooterOne />
    </Fragment>
  );
};

CardDetailPage.displayName = 'CardDetailPage';
export default CardDetailPage;
