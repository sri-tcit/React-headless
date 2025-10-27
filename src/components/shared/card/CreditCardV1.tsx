import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../../ui/button/LinkButton';

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
  slug: string;
  cardName: string;
  cardBenefits: CardBenefit[];
  cardImage: {
    url: string;
    width: number;
    height: number;
  };
  cardBanner?: {
    url: string;
    width: number;
    height: number;
  };
  badges: Badge[];
  buttonText: string;
  buttonLink: string | null;
  applyNowText?: string;
  applyNowLink?: string;
}

interface CreditCardV1Props {
  card: CreditCard;
  className?: string;
  customLink?: string;
}

const CreditCardV1 = ({ card, className, customLink }: CreditCardV1Props) => {
  // Use query parameters instead of dynamic routes for better static export compatibility
  const linkHref = customLink ? `${customLink}?slug=${card.slug}` : `/card-detail?slug=${card.slug}`;
  const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';
  
  // Use card banner as hero image if available, otherwise fallback to card image
  const heroImageSrc = card.cardBanner?.url || card.cardImage?.url;

  return (
    <article className="h-full">
      <div
        className={cn(
          'bg-white dark:bg-background-6 relative scale-100 overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-xl hover:scale-[102%] flex flex-col h-full',
          className,
        )}>
        {/* Hero Image Section with Badges and Card Image Overlay */}
        <div className="relative h-[280px] w-full overflow-hidden flex-shrink-0">
          {/* Background Hero Image */}
          <div className="absolute inset-0">
            <Image
              src={imageUrl + heroImageSrc}
              width={409}
              height={280}
              alt={`${card.cardName} lifestyle image`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Gradient overlay for better badge visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>

          {/* Badges - Top Left */}
          {card.badges && card.badges.length > 0 && (
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              {card.badges.map((badge: Badge) => (
                <span
                  key={badge.id}
                  className="rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                  {badge.badge}
                </span>
              ))}
            </div>
          )}

          {/* Credit Card Image - Bottom Right Overlay */}
          <div className="absolute bottom-4 right-4 z-10 w-[140px] sm:w-[160px] drop-shadow-2xl">
            <Image
              src={imageUrl + card.cardImage?.url}
              width={card.cardImage?.width || 160}
              height={card.cardImage?.height || 100}
              alt={`${card.cardName} card`}
              loading="lazy"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6 p-6 flex flex-col flex-grow">
          {/* Card Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary dark:text-accent mb-4">
              <Link href={linkHref} aria-label={`Learn more about ${card.cardName}`}>
                {card.cardName}
              </Link>
            </h3>
          </div>

          {/* Benefits List */}
          {card.cardBenefits && card.cardBenefits.length > 0 && (
            <ul className="space-y-3 flex-grow">
              {card.cardBenefits.map((benefit: CardBenefit) => (
                <li key={benefit.id} className="flex items-start gap-3">
                  {/* Benefit Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 relative">
                      <Image
                        src={imageUrl + benefit.icon?.url}
                        width={benefit.icon?.width || 20}
                        height={benefit.icon?.height || 20}
                        alt="benefit icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Benefit Text */}
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Call to Action Section */}
          <div className="flex justify-start pt-4 mt-auto">
            {/* Learn More Button */}
            <LinkButton
              href={card.buttonLink || linkHref}
              className="btn btn-secondary btn-md"
              aria-label={`Learn more about ${card.cardName}`}>
              {card.buttonText || 'Learn More'}
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CreditCardV1;

