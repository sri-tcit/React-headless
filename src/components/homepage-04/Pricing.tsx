import pricingPlan from '@/data/json/pricing/pricingPlanV2.json';
import { CheckIcon } from '@/icons';
import gradient4Image from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import BlogCardV1 from '@/components/shared/card/BlogCardV1';
import LinkButton from '@/components/ui/button/LinkButton';

interface CardBenefit {
  id: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
  description: string;
}

interface Badge {
  id: string;
  badge: string;
}

interface CreditCard {
  documentId: string;
  cardName: string;
  slug: string;
  cardBenefits: CardBenefit[];
  cardImage: {
    url: string;
    width: number;
    height: number;
  };
  badges: Badge[];
  buttonText: string;
  buttonLink: string | null;
}

interface CreditCardsData {
  id: string;
  label: string;
  title: string;
  cards: CreditCard[];
}

interface PricingProps {
  data?: CreditCardsData;
}

const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 3);

export default function Pricing({ data }: PricingProps) {
  // Transform credit cards data to IBlogPost format
  const transformedCards: IBlogPost[] = data?.cards?.map((card) => ({
    slug: card.slug,
    title: card.cardName,
    description: card.cardBenefits?.[0]?.description || '',
    thumbnail: card.cardImage?.url || '',
    tag: 'Credit Card',
    author: '',
    authorImage: card.cardBenefits?.[0]?.icon?.url || '',
    publishDate: '',
    readTime: '',
    content: '',
    badges: card.badges, // Pass all badges as array
  })) || [];

  // Use transformed cards if available, otherwise use blogs
  const displayData = transformedCards.length > 0 ? transformedCards : blogs;

  return (
    // <section className="py-14 md:py-20 xl:py-[120px]">
    <div className="bg-background-2 dark:bg-background-5 mx-auto max-w-[1440px] space-y-[70px] rounded-[20px] px-8 py-20 xl:rounded-[32px] xl:px-16 xl:py-[50px]">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan">{data?.label || 'Credit cards'}</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2>{data?.title || 'Select Credit cards that best suits your needs.'}</h2>
        </RevealAnimation>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
        {displayData.map((blog, index) => (
          <RevealAnimation delay={0.6 + index * 0.1} key={blog.slug}>
            <BlogCardV1 blog={blog} customLink="/card-detail" />
          </RevealAnimation>
        ))}
      </div>
      <RevealAnimation delay={0.9}>
        <div className="mt-10 flex justify-center md:mt-14">
          <LinkButton
            href="/blog-01"
            className="btn btn-white btn-lg md:btn-xl hover:btn-primary dark:btn-transparent mx-auto w-full md:mx-0 md:w-auto"
            aria-label="View all blog posts">
            Explore all
          </LinkButton>
        </div>
      </RevealAnimation>
      {/* <div className="grid grid-cols-12 gap-y-5 md:gap-6 xl:gap-8">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <div>
                <div className="w-[290px] xl:h-[195px]" />
                <div className="space-y-2.5">
                  <h3 className="text-heading-6">What&apos;s included</h3>
                  <ul>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Pages included
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Custom design
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      SEO optimization
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Branding support
                    </li>
                    <li className="text-secondary/60 text-tagline-1 py-4 pr-6 font-normal">Social media integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {pricingPlan.map((plan, i) => (
            <RevealAnimation key={plan.name} delay={0.4 + i * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div
                    className={`${
                      plan.isSecondary
                        ? 'bg-secondary text-accent relative z-10 overflow-hidden'
                        : 'bg-background-3 dark:bg-background-7'
                    } space-y-8 rounded-[20px] px-6 py-8 dark:rounded-t-[20px] dark:rounded-b-none`}>
                    {plan.withGradientImg && (
                      <div className="pointer-events-none absolute -top-28 -right-20 -z-1 h-full w-full select-none">
                        <Image src={gradient4Image} alt="pricing bg" />
                      </div>
                    )}

                    <div>
                      <p className={`text-tagline-1 mb-3 font-medium ${plan.isSecondary ? 'text-accent/60' : ''}`}>
                        {plan.name}
                      </p>
                      <h3 className={`text-heading-5 font-normal ${plan.isSecondary ? 'text-accent' : ''}`}>
                        {plan.price}
                      </h3>
                      <p className={plan.isSecondary ? 'text-accent/60' : ''}>{plan.description}</p>
                    </div>

                    <Link
                      href={plan.ctaHref}
                      className={
                        i === 0 || i === pricingPlan.length - 1
                          ? 'btn btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white btn-md w-full first-letter:uppercase before:content-none'
                          : 'btn btn-primary hover:btn-white dark:hover:btn-white btn-md w-full !border-none first-letter:uppercase before:content-none'
                      }>
                      {plan.ctaText}
                    </Link>
                  </div>

                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px] dark:rounded-t-none dark:rounded-b-[20px]">
                    <ul>
                      {plan.cells.map((cell, idx) => {
                        const isLast = idx === plan.cells.length - 1;
                        const base = 'border-b-stroke-4 dark:border-b-stroke-5 h-14 px-6 py-4 text-center';
                        const rowClass = `${!isLast ? 'border-b' : ''} ${
                          cell.type === 'icon' ? 'flex items-center justify-center' : ''
                        }`;

                        return (
                          <li key={idx} className={`${base} ${rowClass}`}>
                            {cell.type === 'text' ? (
                              cell.value ? (
                                <p className="font-medium">{cell.value}</p>
                              ) : null
                            ) : (
                              <span className="size-5 bg-secondary rounded-full dark:bg-accent">
                                <CheckIcon />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div> */}
    </div>
    // </section>
  );
}
