import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'About - NextSaaS',
};

const AboutPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5 min-h-screen pt-32">
        <div className="main-container px-5">
          <div className="py-16">
            <h1 className="text-heading-1 text-primary-50 mb-8">About Us</h1>
            <p className="text-body-1 text-accent/60">
              This is the about page. Add your about content here.
            </p>
          </div>
        </div>
      </main>
      <FooterOne />
    </Fragment>
  );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;

