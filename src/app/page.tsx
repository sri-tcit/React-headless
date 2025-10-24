import About from '@/components/homepage-01/About';
import Faq from '@/components/homepage-01/Faq';
import Hero from '@/components/homepage-01/Hero';
import HowItWorks from '@/components/homepage-01/HowItWorks';
import OurServices from '@/components/homepage-01/OurServices';
import Testimonial from '@/components/homepage-01/Testimonial';
import TimelineIntegration from '@/components/homepage-01/TimelineIntegration';
import CTAV1 from '@/components/shared/cta/CTAV1';
import Homepage21 from './homepage-21/page';
import Homepage14 from './homepage-14/page';
import Blog from '@/components/homepage-01/Blog';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Homepage18 from './homepage-18/page';
import BlogPage01 from './blog-01/page';
import BlogShowcase from '@/components/blog-02/BlogShowcase';
import Blog05  from '@/components/homepage-05/Blog';
import Integration18 from '@/components/homepage-18/Integration';
import Solutions14 from '@/components/homepage-14/Solutions';
import WhyChooseNextSaas14 from '@/components/homepage-14/WhyChooseNextSaas';
import HeroAvatar from '@/components/homepage-24/HeroAvatar';
import Hero21 from '@/components/homepage-21/Hero';
import CTA20 from '@/components/homepage-20/CTA';


export const metadata: Metadata = {
  title: 'Crypto - NextSaaS',
};

const Homepage01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
      <Hero21 />
      <Solutions14 />
      <WhyChooseNextSaas14 />
      <Integration18 />
      <Blog05 />
      <CTA20 />

      
         {/* <Hero /> 
         <About />
        <HowItWorks />
        <OurServices />
        <Faq />
        <TimelineIntegration />
        <Testimonial />
        <Blog />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-white"
          ctaBtnText="Get started"
        />  */}
      </main>
      <FooterOne />
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
