import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface OurMissionProps {
  data?: any;
}

const OurMission = ({ data }: OurMissionProps) => {
  const { label, title, description, image } = data || {};
  const imageurl = process.env.strapi_image_url || '';

    console.log(data,'our mission data');
    
  return (
    <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
            {label && (
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">{label}</span>
              </RevealAnimation>
            )}
            <div className="space-y-3 md:max-w-[540px]">
              {title && (
                <RevealAnimation delay={0.2}>
                  <h2>{title}</h2>
                </RevealAnimation>
              )}
              {description && (
                <RevealAnimation delay={0.3}>
                  <p>{description}</p>
                </RevealAnimation>
              )}
            </div>
          </div>
          {
            console.log(imageurl + image.url)
          }
          {image && (
            <RevealAnimation delay={0.4}>
              <div className="w-full lg:w-1/2 max-w-[650px]">
                <figure className="rounded-[20px] overflow-hidden">
                  <Image
                    src={imageurl + image.url}
                    alt={title || 'Our Mission'}
                    width={image.width || 650}
                    height={image.height || 400}
                    className="w-full h-auto object-cover"
                  />
                </figure>
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
