import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import PageHero from '@/components/shared/PageHero';
import VisionStatement from '@/components/aboutpage-01/VisionStatement';
import OurMission from '@/components/aboutpage-01/OurMission';
import Process from '@/components/integration-02/Process';
import ContactUs from '@/components/homepage-14/ContactUs';
import CTA20 from '@/components/homepage-20/CTA';

export const metadata: Metadata = {
  title: 'About - NextSaaS',
};

const AboutPage = () => {
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
          title="About us 1"
          heading="About us"
          link="/about-01"
        />
        <VisionStatement />
        <OurMission />
      </main>
      <Process />
      <ContactUs />
      <CTA20 />
      <FooterOne />
    </>
  );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
