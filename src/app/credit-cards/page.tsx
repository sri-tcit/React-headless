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
         <section className="pt-[50px] md:pt-[75px] pb-[50px] md:pb-[75px] bg-background-3 dark:bg-background-7" aria-label="Call to Action">
        <div className="max-w-[1440px] mx-auto ">
        <div className="bg-white dark:bg-background-6 py-[76px] rounded-[30px] relative overflow-hidden ">
          {/* left bg  */}
          <RevealAnimation delay={0.7} direction="left" offset={240}>
            <figure
              className="absolute bottom-[-103px] left-[-120px] max-w-[230px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[386px] w-full select-none pointer-events-none"
              role="presentation">
              <Image src={gradient15} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
          <div className="main-container">
            <div className="space-y-6">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-primary-light">Let&apos;s connect</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2>Ready to grow smarter?</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="max-w-[558px] md:w-full mx-auto">
                      Let&apos;s make your marketing budget work harder—not bigger. Book your strategy call today and
                      take the first step toward predictable growth.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.5}>
                <div className="text-center cta-button">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl">
                    Book your free strategy call
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* right bg  */}
          <RevealAnimation delay={0.7} direction="right" offset={240}>
            <figure
              className="absolute top-[-152px] md:top-[-195px] right-[-104px] md:right-[-188px] max-w-[290px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[535px] w-full select-none pointer-events-none"
              role="presentation">
              <Image src={gradient50} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      </section>
       
       </main> 
      <FooterOne />
    </Fragment>
  );
};

CreditCardsPage.displayName = 'CreditCardsPage';
export default CreditCardsPage;

