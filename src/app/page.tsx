'use client';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Fragment, useEffect, useState } from 'react';
import Blog05 from '@/components/homepage-05/Blog';
import Integration18 from '@/components/homepage-18/Integration';
import Solutions14 from '@/components/homepage-14/Solutions';
import WhyChooseNextSaas14 from '@/components/homepage-14/WhyChooseNextSaas';
import Hero21 from '@/components/homepage-21/Hero';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { HOME_QUERY } from '@/graphql/queries/home';

const Homepage01 = () => {
  const [home, setHome] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const data = await Client.request(HOME_QUERY);
        setHome(data?.home);
        console.log('Fetched home data:', data?.home);
      } catch (err) {
        console.error('GraphQL fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <Fragment>
        <NavbarOne
          className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
          btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-2 dark:bg-background-5">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        </main>
        <FooterOne />
      </Fragment>
    );
  }

  if (!home) {
    return (
      <Fragment>
        <NavbarOne
          className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
          btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-2 dark:bg-background-5">
          <p className="text-lg text-gray-500">No home data available.</p>
        </main>
        <FooterOne />
      </Fragment>
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
