
import heroDotVectorBg from '@public/images/home-page-17/hero-dot-vector-bg.svg';
import heroThumbnail from '@public/images/home-page-17/hero-thumbnail.png';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';



interface HeroBanner {
  id: string;
  heading: string;
  subheading: string;
  buttontext: string;
  buttonlink: string | null;
  bannerImage: {
    url: string;
    height: number;
    width: number;
  };
}

interface HeroProps {
  data?: HeroBanner;
}

const Hero = ({ data }: HeroProps) => {
  const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';
  const heading = data?.heading || 'Apps made for the future!';
  const subheading = data?.subheading || 'From concept to launch, we design and develop mobile and web apps that drive real results.';
  const buttonText = data?.buttontext || 'Apply Now';
  const buttonLink = data?.buttonlink || '/contact-us';
  const bannerImage = data?.bannerImage ? imageUrl + data.bannerImage.url : heroThumbnail;
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Hero Section">
      <div className="max-w-[1440px] mx-auto">
        <RevealAnimation delay={0.1}>
          <div className="bg-linear-[180deg,_#B3C3DA_0%,_#93A5BE_100%] overflow-hidden rounded-[20px] relative top-4 lg:top-8 h-auto">
            <figure
              className="absolute inset-0 z-0 translate-x-3 animate-pulse lg:translate-x-4 xl:translate-x-[75px]"
              aria-hidden="true">
              <Image src={heroDotVectorBg} alt="Decorative background pattern" />
            </figure>
            <div className="main-container relative z-10">
              <div className="flex flex-col md:flex-row items-center pt-36 md:pt-40 gap-y-16 lg:py-[150px] xl:py-[170px] justify-center">
                <div>
                  <div className="space-y-2 md:space-y-4 mb-6 md:mb-8 text-center md:text-left">
                    <RevealAnimation delay={0.2}>
                      <h1 className="max-w-full lg:max-w-[507px] dark:text-secondary text-[58px]">{heading}</h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p className="md:max-w-[429px] text-secondary/60">
                        {subheading}
                      </p>
                    </RevealAnimation>
                  </div>
                  {/* <div className="flex items-center flex-col sm:flex-row justify-center gap-y-5 md:justify-start sm:gap-x-4 mb-10 lg:mb-14">
                    <div className="flex -space-x-3.5" role="group">
                      <RevealAnimation delay={0.2} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-12 rounded-full ring-2 ring-white dark:ring-black bg-ns-yellow"
                            src={avatar1}
                            alt="User avatar 1"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.3} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-12 rounded-full ring-2 ring-white dark:ring-black bg-ns-red"
                            src={avatar2}
                            alt="User avatar 2"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-12 rounded-full ring-2 ring-white dark:ring-black bg-ns-green"
                            src={avatar3}
                            alt="User avatar 3"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.5} direction="right" offset={50}>
                        <div className="inline-flex items-center cursor-pointer justify-center size-12 rounded-full ring-2 ring-white dark:ring-black text-white dark:text-black bg-[#9DAEC6] text-tagline-3 font-medium">
                          99+
                        </div>
                      </RevealAnimation>
                    </div>
                    <div>
                      <RevealAnimation delay={0.6} offset={40}>
                        <p className="font-medium block text-left text-secondary text-tagline-2">Trusted by 20k+</p>
                      </RevealAnimation>
                      <RevealAnimation delay={0.7} offset={40}>
                        <p className="text-tagline-3 dark:text-secondary/60">Customers across the globe</p>
                      </RevealAnimation>
                    </div>
                  </div> */}
                  {/* btn-white */}
                  <RevealAnimation delay={0.8}>
                    <div className="w-[95%] mx-auto md:mx-0 md:w-full">
                      <LinkButton
                        href={buttonLink}
                        className="btn btn-white btn-xl hover:btn-secondary w-full dark:btn-black dark:hover:btn-accent md:w-auto"
                        aria-label="Book a free consultation call">
                        {buttonText}
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.9}>
                  <figure className="max-w-[643px] w-full">
                    <Image 
                      src={bannerImage} 
                      alt="App showcase illustration" 
                      width={data?.bannerImage?.width || 643}
                      height={data?.bannerImage?.height || 643}
                      className="size-full object-cover max-w-[450px] mx-auto" 
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
      {/* Client Logos Section */}
      {/* <aside className="main-container relative mt-[64px] lg:mt-[120px] z-10" aria-label="Our Clients">
        <RevealAnimation delay={0.2}>
          <div
            className="flex items-center flex-wrap md:flex-nowrap justify-center gap-4 md:gap-x-4 lg:gap-x-8"
            role="list">
            {clientLogos.map((logo) => (
              <figure role="listitem" className="lg:min-w-36 lg:ml-8" key={logo.alt}>
                <Image src={logo.src} alt={logo.alt} className="lg:w-auto inline-block dark:hidden" />
                <Image src={logo.darkSrc} alt={logo.alt} className="lg:w-auto hidden dark:inline-block" />
              </figure>
            ))}
          </div>
        </RevealAnimation>
      </aside> */}
    </section>
  );
};

export default Hero;
