{
  /* ===========================
  integration process section
  =========================== */
}
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessProps {
  data?: any;
}

const Process = ({ data }: ProcessProps) => {
  const { label, title, stepItems } = data || {};
  const imageurl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';

  return (
    <section className="pb-24 pt-14 md:pb-36 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px] bg-background-1 dark:bg-background-6">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-5 text-center max-w-[540px] mx-auto">
          {label && (
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green">{label}</span>
            </RevealAnimation>
          )}
          {title && (
            <RevealAnimation delay={0.3}>
              <h2>{title}</h2>
            </RevealAnimation>
          )}
        </div>
        {stepItems && stepItems.length > 0 && (
          <div className="grid gap-8 grid-cols-12 justify-center">
            {stepItems.map((step: any, index: number) => (
              <RevealAnimation key={step.id} delay={0.3 + index * 0.1}>
                <article className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5">
                  <div className="flex items-center justify-between">
                    <span className="text-tagline-2 dark:text-accent">{step.label}</span>
                    {step.icon && (
                      <figure className="w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src={imageurl + step.icon.url}
                          alt={step.title || 'Step icon'}
                          width={step.icon.width || 52}
                          height={step.icon.height || 52}
                          className="object-contain"
                        />
                      </figure>
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">{step.title}</h3>
                    <p className="max-w-[344px]">{step.description}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Process;
