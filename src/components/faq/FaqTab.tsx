import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import FaqTabContent from './FaqTabContent';
import FaqTabList from './FaqTabList';

interface FaqTabProps {
  data?: any;
}

const FaqTab = ({ data }: FaqTabProps) => {
  const { label, title, description, faqListing } = data || {};

  return (
    <section className="py-[80px]">
      <div className="main-container">
        <div className="text-center space-y-5">
          {label && (
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">{label}</span>
            </RevealAnimation>
          )}
          <div className="space-y-3 text-center">
            {title && (
              <RevealAnimation delay={0.3}>
                <h2>{title}</h2>
              </RevealAnimation>
            )}
            {description && (
              <RevealAnimation delay={0.4}>
                <p className="max-w-[600px] mx-auto">
                  {description}
                </p>
              </RevealAnimation>
            )}
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="py-[70px]">
            <TabProvider defaultValue={0}>
              <FaqTabList faqListing={faqListing} />
              <FaqTabContent faqListing={faqListing} />
            </TabProvider>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FaqTab;
