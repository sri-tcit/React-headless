import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Hero from '@/components/homepage-17/Hero';
import WhatWeOffer from '@/components/homepage-17/WhatWeOffer';
import Process from '@/components/homepage-17/Process';
import FaqTab from '@/components/faq/FaqTab';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { CARD_DETAIL_QUERY } from '@/graphql/queries/cardDetail';

export const metadata: Metadata = {
  title: 'Card Details - Nafa Bank',
};

interface CardDetailPageProps {
  params: {
    slug: string;
  };
}

const CardDetailPage = async ({ params }: any) => {
  const { slug } = params;
  
  let cardData: any = null;

  try {
    const data = await Client.request(CARD_DETAIL_QUERY, { slug });
    cardData = data?.cardsListing?.creditCards?.cards?.[0];
  } catch (err) {
    console.error('GraphQL fetch error:', err);
  }

  if (!cardData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Card not found.</p>
      </main>
    );
  }

  const { heroBanner, offers, applySteps, cardsFAQ, ctaSection, cardBenefits } = cardData;

  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        {heroBanner && <Hero data={heroBanner} />}
        {offers && <WhatWeOffer data={offers} />}
        {applySteps && <Process data={applySteps} />}
        {cardsFAQ && <FaqTab data={cardsFAQ} />}
        {ctaSection && <CTA20 data={ctaSection} />}
      </main>
      <FooterOne />
    </Fragment>
  );
};

CardDetailPage.displayName = 'CardDetailPage';
export default CardDetailPage;

