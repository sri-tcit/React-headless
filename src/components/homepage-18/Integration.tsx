import gradient32 from '@public/images/gradient/gradient-32.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const Integration = ({ data }: { data: any }) => {
  console.log('Integration section data:', data);
  const imageurl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL;

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[150px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[250px]">
      <div className="bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row items-start gap-y-24 gap-x-[140px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-green mb-5">{data.label}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mb-3 max-w-[529px]">{data.heading}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mb-7 lg:max-w-[620px]">{data.description}</p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href="/about"
                    rel="noopener noreferrer"
                    className="btn btn-secondary hover:btn-primary dark:btn-transparent btn-md w-[85%] md:w-auto mx-auto">
                    {data.buttonText}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <StackCardWrapper
              topOffset="15vh"
              gap="24px"
              initDelay={100}
              className="w-full lg:flex-1 lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full">
              {data.cards.length > 0 &&
                data.cards.map((item: any, index: number) => (
                  <StackCardItem key={item.id || index}>
                    <div className="lg:max-w-[483px] max-w-full max-sm:min-h-[433px]">
                      <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                        <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-99%] left-[-52%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                          <Image src={gradient32} alt="gradient-border" className="w-full h-full object-cover" />
                        </figure>
                        <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                          <figcaption className="space-y-2">
                            <h5>{item.title}</h5>
                            <p className="max-w-[250px]">
                              {item.description}
                            </p>
                          </figcaption>
                          <figure className="max-w-[385px] w-full">
                            <Image
                              src={imageurl + item.picture.url}
                              alt="case icon"
                              className="w-full md:max-h-[300px] md:min-h-[300px] object-contain"
                              width={385}
                              height={300}
                            />
                          </figure>
                        </figure>
                      </div>
                    </div>
                  </StackCardItem>
                ))}
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
