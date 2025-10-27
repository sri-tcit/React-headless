'use client';

import Pricing from '@/components/homepage-04/Pricing';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Fragment, useEffect, useState } from 'react';
import PageHero from '@/components/shared/PageHero';

import FaqTab from '@/components/faq/FaqTab';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { CARDLIST_QUERY } from '@/graphql/queries/cardList';

const CreditCardsPage = () => {
  const [cardList, setCardList] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardList = async () => {
      try {
        setLoading(true);
        const data = await Client.request(CARDLIST_QUERY);
        console.log('Fetched card list data:', data);
        setCardList(data?.cardsListing);
      } catch (err) {
        console.error('GraphQL fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCardList();
  }, []);

  if (loading) {
    return (
      <Fragment>
        <NavbarOne
          className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
          btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-3 dark:bg-background-7">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-500">Loading credit cards...</p>
          </div>
        </main>
        <FooterOne />
      </Fragment>
    );
  }

  if (!cardList) {
    return (
      <Fragment>
        <NavbarOne
          className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
          btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-3 dark:bg-background-7">
          <p className="text-lg text-gray-500">No card data available.</p>
        </main>
        <FooterOne />
      </Fragment>
    );
  }

  const { ctaSection, faqSection, creditCards } = cardList;

  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Cards" heading="Credit Cards" link="/credit-cards" />
        {/* <main className="bg-background-2 dark:bg-background-5 min-h-screen pt-32"> */}
        {creditCards && (
          <div className="main-container">
            <Pricing data={creditCards} />
          </div>
        )}

        {faqSection && <FaqTab data={faqSection} />}
        {
          ctaSection && <CTA20 data={ctaSection} />
        }
      </main>
      <FooterOne />
    </Fragment>
  );
};

CreditCardsPage.displayName = 'CreditCardsPage';
export default CreditCardsPage;
