import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = ({ data }: { data: any }) => {
  const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';
  console.log('Hero section data:', data);
  return (
    <section className="pt-36 lg:pt-[150px] md:pt-[180px]">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-start min-[1096px]:justify-center gap-y-16 items-center">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <div className="space-y-2.5 lg:space-y-4">
                <RevealAnimation delay={0.1}>
                  <h1 className="lg:max-w-[645px]">{data.heading}</h1>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="lg:max-w-[465px]">{data.subheading}</p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="mt-10 lg:mt-14">
                  <LinkButton
                    href={data.buttonlink || '#'}
                    className="hero-button btn btn-md md:btn-xl hover:btn-secondary btn-primary dark:btn-accent dark:hover:btn-white-dark w-[90%] md:w-auto">
                    {data.buttontext}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="lg:max-w-[277px] w-full">
              <div className="divider border-t border-stroke-2 dark:border-stroke-6 w-0" />
            </div>
            {/* <div className="flex gap-4 items-center justify-center md:justify-start avatar-group-images">
              <AvatarGroup />
              <RevealAnimation delay={0.8}>
                <div>
                  <p className="text-tagline-2 font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                  <p className="text-tagline-3">Customers Across the globe</p>
                </div>
              </RevealAnimation>
            </div> */}
          </div>
          <RevealAnimation delay={0.6} duration={2} useSpring={true} direction="up">
            <figure className="max-w-[300px] md:max-w-[320px] lg:max-w-[400px] 2xl:max-w-[700px] relative -z-0 md:-mt-72 lg:-mt-28 2xl:-mt-36">
              {data?.bannerImage?.url && (
                <Image 
                  src={imageUrl + data.bannerImage.url} 
                  alt={data.heading || "Banner image"}
                  width={data.bannerImage.width || 700}
                  height={data.bannerImage.height || 700}
                  className="size-full object-cover" 
                />
              )}
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
