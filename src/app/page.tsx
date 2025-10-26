import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Blog05 from '@/components/homepage-05/Blog';
import Integration18 from '@/components/homepage-18/Integration';
import Solutions14 from '@/components/homepage-14/Solutions';
import WhyChooseNextSaas14 from '@/components/homepage-14/WhyChooseNextSaas';
import Hero21 from '@/components/homepage-21/Hero';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { HOME_QUERY } from '@/graphql/queries/home';

export const metadata: Metadata = {
  title: 'Crypto - NextSaaS',
};

const Homepage01 = async () => {
  let home: any = null;

  try {
    const data = await Client.request(HOME_QUERY);
    home = data?.home;
    console.log('Fetched home data:', home);
  } catch (err) {
    console.error('GraphQL fetch error:', err);
  }

  if (!home) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">No home data available.</p>
      </main>
    );
  }

  const { herosection, services, whychooseus, processsection, ctaSection, insights } = home;

  

  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />

      <main className="bg-background-2 dark:bg-background-5">
        {herosection && <Hero21 data={herosection} />}
        {services && <Solutions14 data={services} />}
        {whychooseus && <WhyChooseNextSaas14 data={whychooseus} />}
        {processsection && <Integration18 data={processsection} />}
        {insights && <Blog05 data={insights} />}
        {ctaSection && <CTA20 data={ctaSection} />}
      </main>

      <FooterOne />
    </Fragment>
  );
};

Homepage01.displayName = 'Homepage01';

export default Homepage01;
