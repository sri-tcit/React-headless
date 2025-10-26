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
import { Client } from '@/graphql/client';
import { ABOUT_QUERY } from '@/graphql/queries/about';

export const metadata: Metadata = {
  title: 'About - Nafa Bank',
};

const AboutPage = async() => {
    let about: any = null;
  
    try {
      const data = await Client.request(ABOUT_QUERY);
      about = data?.about;
    } catch (err) {
      console.error('GraphQL fetch error:', err);
    }
    
    const { aboutTitle, ctaSection, passionSection, steps, ourMission , contactSection } = about;


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
