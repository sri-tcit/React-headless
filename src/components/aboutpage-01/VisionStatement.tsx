import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface VisionStatementProps {
  data?: any;
}

const VisionStatement = ({ data }: VisionStatementProps) => {
  const { label, title, description, images } = data || {};
  const imageurl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';

  // Split images into left column (first 2) and right column (3rd)
  const leftColumnImages = images || [];
  // const rightColumnImage = images?.[2];

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center max-w-[780px] mx-auto">
          {label && (
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan mb-5">{label}</span>
            </RevealAnimation>
          )}
          {title && (
            <RevealAnimation delay={0.3}>
              <h2>{title}</h2>
            </RevealAnimation>
          )}
          {description && (
            <RevealAnimation delay={0.4}>
              <p>{description}</p>
            </RevealAnimation>
          )}
        </div>
        {images && images.length > 0 && (
          <article className="grid grid-cols-12 gap-y-8 gap-x-8 justify-items-center">
            {leftColumnImages.map((image:any, index:any) => {
              // Check if this is the last item and total count is odd
              const isLastOddItem = index === leftColumnImages.length - 1 && leftColumnImages.length % 2 !== 0;
              
              return (
                <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                  <figure className={`col-span-12 md:col-span-6 ${isLastOddItem ? 'md:col-start-4' : ''} rounded-[20px] overflow-hidden max-w-[630px]`}>
                    <Image
                      src={imageurl + image.url}
                      alt={`Vision image ${index + 1}`}
                      className="w-full h-auto"
                      width={630}
                      height={image.height || 400}
                    />
                  </figure>
                </RevealAnimation>
              );
            })}
          </article>
        )}
      </div>
    </section>
  );
};

export default VisionStatement;
