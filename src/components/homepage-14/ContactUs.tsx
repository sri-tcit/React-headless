import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export interface ContactItem {
  icon: {
    url: string;
    height: number;
    width: number;
  };
  id: string;
  value: string;
}

export interface ContactFormField {
  id: string;
  label: string;
  placeholder: string;
}

export interface ContactUsData {
  id: string;
  title: string;
  description: string;
  contactItems: ContactItem[];
  contactFormFields: ContactFormField[];
  submitBtn: string;
  termsLabel: string;
}

export interface ContactUsProps {
  data?: ContactUsData;
}

const contactInfo = [
  {
    id: 1,
    type: 'email',
    text: 'hello@nextsaas.com',
    href: 'mailto:hello@nextsaas.com',
    ariaLabel: 'Email us at hello@nextsaas.com',
    icon: {
      light: '/images/icons/mail.svg',
      dark: '/images/icons/mail-white.svg',
      alt: 'Email icon',
    },
  },
  {
    id: 2,
    type: 'phone',
    text: '(239) 555-0108',
    href: 'tel:2395550108',
    ariaLabel: 'Call us at (239) 555-0108',
    icon: {
      light: '/images/icons/phone.svg',
      dark: '/images/icons/phone-white.svg',
      alt: 'Phone icon',
    },
  },
  {
    id: 3,
    type: 'address',
    text: '1425 Harmony ave, Austin, TX 73301',
    href: null,
    ariaLabel: null,
    icon: {
      light: '/images/icons/location.svg',
      dark: '/images/icons/location-white.svg',
      alt: 'Location icon',
    },
  },
];

const ContactUs = ({ data }: ContactUsProps) => {
  const imageUrl = process.env.strapi_image_url || '';
  const title = data?.title || 'Still have questions?';
  const description = data?.description || "Have questions about your financial future? Let's talk.";
  const submitBtn = data?.submitBtn || 'Submit';
  const termsLabel = data?.termsLabel || 'I agree with the';
  
  // Use dynamic contact items if available, otherwise use default
  const contactItems = data?.contactItems || [];
  const formFields = data?.contactFormFields || [];

  // Helper function to determine href and type from value
  const getContactHref = (value: string) => {
    if (value.includes('@')) return `mailto:${value.trim()}`;
    if (value.match(/\(\d{3}\)/)) return `tel:${value.replace(/\D/g, '')}`;
    return null;
  };

  return (
    <section className="pt-16 md:pt-[90px] lg:pt-[100px] pb-20 md:pb-[150px] lg:pb-[200px]" aria-label="Contact Us">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-8 items-start justify-between">
          {/* contact us text  */}
          <div className="space-y-9">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>{title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>{description}</p>
              </RevealAnimation>
            </div>
            {/* contact info  */}
            <ul className="space-y-6" aria-label="Contact Information">
              {contactItems.length > 0 ? (
                contactItems.map((item, idx) => {
                  const href = getContactHref(item.value);
                  return (
                    <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                      <li className="flex items-center gap-2">
                        <span
                          className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                          aria-hidden="true">
                          <Image
                            src={imageUrl + item.icon.url}
                            alt="Contact icon"
                            className="size-6"
                            width={item.icon.width}
                            height={item.icon.height}
                          />
                        </span>
                        <p>
                          {href ? (
                            <Link href={href} aria-label={item.value}>
                              {item.value}
                            </Link>
                          ) : (
                            item.value
                          )}
                        </p>
                      </li>
                    </RevealAnimation>
                  );
                })
              ) : (
                contactInfo.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-2">
                      <span
                        className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                        aria-hidden="true">
                        <Image
                          src={item.icon.light}
                          alt={item.icon.alt}
                          className="size-6 dark:hidden"
                          width={24}
                          height={24}
                        />
                        <Image
                          src={item.icon.dark}
                          alt={item.icon.alt}
                          className="size-6 hidden dark:block"
                          width={24}
                          height={24}
                        />
                      </span>
                      <p>
                        {item.href ? (
                          <Link href={item.href} aria-label={item.ariaLabel || item.text}>
                            {item.text}
                          </Link>
                        ) : (
                          item.text
                        )}
                      </p>
                    </li>
                  </RevealAnimation>
                ))
              )}
            </ul>
          </div>
          {/* contact form  */}
          <RevealAnimation delay={0.5}>
            <div className="p-4 lg:p-[42px] bg-white dark:bg-background-8 rounded-[20px] lg:max-w-[560px] lp:max-w-[605px] w-full">
              <form method="post">
                {formFields.map((field, index) => {
                  const isTextarea = field.label.toLowerCase().includes('message');
                  const inputType = field.label.toLowerCase().includes('email') ? 'email' : 'text';
                  const fieldName = field.label.toLowerCase().replace(/\s+/g, '');
                  
                  return (
                    <fieldset key={field.id} className={`w-full flex flex-col gap-2 items-start justify-start ${index === formFields.length - 1 ? 'mb-4' : 'mb-8'}`}>
                      <label htmlFor={fieldName} className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {field.label}
                      </label>
                      {isTextarea ? (
                        <textarea
                          id={fieldName}
                          name={fieldName}
                          required
                          placeholder={field.placeholder}
                          className="rounded-xl placeholder:text-tagline-1 border border-stroke-3 w-full px-[18px] py-3 min-h-[120px] resize-none focus-visible:outline focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary placeholder:font-normal font-normal"
                          aria-required="true"
                          defaultValue={''}
                        />
                      ) : (
                        <input
                          id={fieldName}
                          type={inputType}
                          name={fieldName}
                          required
                          placeholder={field.placeholder}
                          className="rounded-full placeholder:text-tagline-1 border border-stroke-3 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary placeholder:font-normal font-normal"
                          aria-required="true"
                        />
                      )}
                    </fieldset>
                  );
                })}
                {/* terms and conditions checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3 cursor-pointer">
                    <input id="agree-terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    {termsLabel}
                    <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                      {' '}
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-secondary dark:btn-accent btn-md w-full before:content-none first-letter:uppercase hover:btn-primary"
                  aria-label="Submit contact form">
                  {submitBtn}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
