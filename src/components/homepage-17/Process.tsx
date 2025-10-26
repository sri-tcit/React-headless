'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';

interface StepItem {
  id: string;
  label: string;
  title: string;
  description: string;
  icon?: {
    url: string;
    height: number;
    width: number;
  };
}

interface ApplyStepsData {
  id: string;
  label: string;
  title: string;
  stepItems: StepItem[];
}

interface ProcessProps {
  data?: ApplyStepsData;
}

const defaultSteps: StepItem[] = [
  {
    id: '1',
    label: '01',
    title: 'Discovery & strategy',
    description: 'Start your application in minutes—no paperwork required.',
  },
  {
    id: '2',
    label: '02',
    title: 'Design & prototype',
    description: 'Our team reviews your application and offers a personalized loan solution.',
  },
  {
    id: '3',
    label: '03',
    title: 'Development & testing',
    description: 'We handle the coordination, documents, and closing logistics.',
  },
];

const Process = ({ data }: ProcessProps) => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });

  const imageUrl = process.env.strapi_image_url || '';
  const label = data?.label || 'Our Process';
  const title = data?.title || 'Easy to apply in 3 steps';
  const steps = data?.stepItems || defaultSteps;

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-14">
        <div className="space-y-5 text-center mx-auto lg:text-left lg:mx-0">
          <RevealAnimation delay={0.2}>
            <span className="badge inline-block badge-primary-light">{label}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="lg:max-w-[396px]">{title}</h2>
          </RevealAnimation>
        </div>
        <div ref={ref} className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-[62px]">
          {steps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
              <div className="space-y-3 max-w-[408px] w-full">
                {/* progress bar  */}
                <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative">
                  <div className="progress-line w-0 bg-ns-cyan rounded-full h-full absolute left-0" />
                </div>
                {/* number or icon */}
                {step.icon ? (
                  <div className="w-12 h-12">
                    <Image
                      src={imageUrl + step.icon.url}
                      alt={step.title}
                      width={step.icon.width}
                      height={step.icon.height}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-tagline-2 text-primary-500">{step.label}</p>
                )}
                {/* text  */}
                <div className="space-y-2">
                  <h2 className="text-heading-5">{step.title}</h2>
                  <p className={index === 0 ? 'max-w-[260px] w-full' : ''}>{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
