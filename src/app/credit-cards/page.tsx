import Pricing from '@/components/homepage-04/Pricing';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import PageHero from '@/components/shared/PageHero';

import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '@/components/animation/RevealAnimation';

import LinkButton from '@/components/ui/button/LinkButton';
import ProcessFaq from '@/components/process-01/ProcessFaq';

import FaqTab from '@/components/faq/FaqTab';
import CTA20 from '@/components/homepage-20/CTA';
import Image from 'next/image';
import gradient15 from '@public/images/gradient/gradient-15.png';
import gradient50 from '@public/images/gradient/gradient-50.png';

const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 3);

export const metadata: Metadata = {
  title: 'Credit Cards - NextSaaS',
};

const CreditCardsPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Cards" heading="Credit Cards" link="/credit-cards" />
        {/* <main className="bg-background-2 dark:bg-background-5 min-h-screen pt-32"> */}
        <div className="main-container">
          <Pricing />
        </div>

        <FaqTab />
        <CTA20 />
      </main>
      <FooterOne />
    </Fragment>
  );
};

CreditCardsPage.displayName = 'CreditCardsPage';
export default CreditCardsPage;
