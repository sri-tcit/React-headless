import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = ({ data }: { data: any }) => {
  const { label, title, description, buttonText, buttonLink, leftImage, rightImage } = data || {};

  const imageurl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';

  return (
    <section
      className="pt-[100px] md:pt-[50px] pb-[50px] md:pb-[75px] bg-background-3 dark:bg-background-7"
      aria-label="Call to Action">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white dark:bg-background-6 py-[76px] rounded-[30px] relative overflow-hidden">
          {leftImage && (
            <RevealAnimation delay={0.7} direction="left" offset={240}>
              <figure
                className="absolute bottom-[-103px] left-[-120px] max-w-[230px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[386px] w-full select-none pointer-events-none"
                role="presentation">
                <Image
                  src={imageurl + leftImage.url}
                  width={leftImage.width}
                  height={100}
                  className="size-full bg-cover"
                  alt="Decorative background shape"
                />
              </figure>
            </RevealAnimation>
          )}
          <div className="main-container">
            <div className="space-y-6">
              <div className="space-y-5 text-center">
                {label && (
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-primary-light">{label}</span>
                  </RevealAnimation>
                )}
                <div className="space-y-3">
                  {title && (
                    <RevealAnimation delay={0.3}>
                      <h2>{title}</h2>
                    </RevealAnimation>
                  )}
                  {description && (
                    <RevealAnimation delay={0.4}>
                      <p className="max-w-[558px] md:w-full mx-auto">{description}</p>
                    </RevealAnimation>
                  )}
                </div>
              </div>
              {buttonText && (
                <RevealAnimation delay={0.5}>
                  <div className="text-center cta-button">
                    <LinkButton
                      href={buttonLink || '/contact-us'}
                      className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl">
                      {buttonText}
                    </LinkButton>
                  </div>
                </RevealAnimation>
              )}
            </div>
          </div>
          {/* right bg  */}
          {rightImage && (
            <RevealAnimation delay={0.7} direction="right" offset={240}>
              <figure
                className="absolute top-[-152px] md:top-[-195px] right-[-104px] md:right-[-188px] max-w-[290px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[535px] w-full select-none pointer-events-none"
                role="presentation">
                <Image
                  src={imageurl + rightImage.url}
                  width={rightImage.width}
                  height={100}
                  className="size-full bg-cover"
                  alt="Decorative background shape"
                />
              </figure>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
