'use client';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Fragment, useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '@/components/homepage-17/Hero';
import WhatWeOffer from '@/components/homepage-17/WhatWeOffer';
import Process from '@/components/homepage-17/Process';
import FaqTab from '@/components/faq/FaqTab';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { CARD_DETAIL_QUERY } from '@/graphql/queries/cardDetail';

function CardDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  
  const [cardData, setCardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCardData = async () => {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await Client.request(CARD_DETAIL_QUERY, { slug });
        const card = data?.cardsListing?.creditCards?.cards?.[0];
        
        if (card) {
          setCardData(card);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('GraphQL fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-500">Loading card details...</p>
        </div>
      </main>
    );
  }

  if (error || !cardData) {
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
}

const CardDetailPage = () => {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      </main>
    }>
      <CardDetailContent />
    </Suspense>
  );
};

CardDetailPage.displayName = 'CardDetailPage';
export default CardDetailPage;

