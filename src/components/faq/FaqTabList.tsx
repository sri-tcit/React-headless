import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

interface FaqTabListProps {
  faqListing?: any[];
}

const FaqTabList = ({ faqListing }: FaqTabListProps) => {
  if (!faqListing || faqListing.length === 0) return null;

  return (
    <Fragment>
      <TabList variant="desktop">
        {faqListing.map((category, index) => (
          <Tab key={category.id} index={index} variant="desktop">
            {category.categoryTitle}
          </Tab>
        ))}
      </TabList>
      <TabList variant="mobile">
        {faqListing.map((category, index) => (
          <Tab key={category.id} index={index} variant="mobile" className={index === faqListing.length - 1 ? "text-nowrap" : ""}>
            {category.categoryTitle}
          </Tab>
        ))}
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
