'use client';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Fragment, useEffect, useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import VisionStatement from '@/components/aboutpage-01/VisionStatement';
import OurMission from '@/components/aboutpage-01/OurMission';
import Process from '@/components/integration-02/Process';
import ContactUs from '@/components/homepage-14/ContactUs';
import CTA20 from '@/components/homepage-20/CTA';
import { Client } from '@/graphql/client';
import { ABOUT_QUERY } from '@/graphql/queries/about';

const AboutPage = () => {
  const [about, setAbout] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const data = await Client.request(ABOUT_QUERY);
        setAbout(data?.about);
      } catch (err) {
        console.error('GraphQL fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <>
        <NavbarOne
          megaMenuColor="dark:bg-background-7"
          className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
          btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-3 dark:bg-background-7">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        </main>
        <FooterOne />
      </>
    );
  }

  if (!about) {
    return (
      <>
        <NavbarOne
          megaMenuColor="dark:bg-background-7"
          className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
          btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        />
        <main className="flex min-h-screen items-center justify-center bg-background-3 dark:bg-background-7">
          <p className="text-lg text-gray-500">No about data available.</p>
        </main>
        <FooterOne />
      </>
    );
  }

  const { aboutTitle, ctaSection, passionSection, steps, ourMission, contactSection } = about;


  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          className="bg-background-3 dark:bg-background-7"
          title={aboutTitle?.label }
          heading={aboutTitle?.title }
          link="/about"
        />
        {passionSection && <VisionStatement data={passionSection} />}
        {ourMission && <OurMission data={ourMission} />}
      </main>
      {steps && <Process data={steps} />}
      {contactSection && <ContactUs data={contactSection} />}
      {
        ctaSection && <CTA20 data={ctaSection} />
      }

      <FooterOne />
    </>
  );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
