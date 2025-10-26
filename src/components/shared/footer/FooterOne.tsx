import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

const FooterOne = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-white relative overflow-hidden', className)}>
      {/* <!-- right gradient --> */}
      {/* <FooterRightGradient /> */}

      {/* <!-- left gradient --> */}
      {/* <FooterLeftGradient /> */}
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure>
                  <Image src={mainLogo} alt="NextSass Logo" />
                </figure>
                <p className="text-secondary/70 text-tagline-1 mt-4 mb-7 font-normal">
                  Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com" className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6 invert" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-secondary/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.instagram.com" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6 invert" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-secondary/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.youtube.com" className="footer-social-link">
                    <span className="sr-only">Youtube</span>
                    <Image className="size-6 invert" src={youtube} alt="Youtube" />
                  </Link>
                  <div className="bg-secondary/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6 invert" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-secondary/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.dribbble.com" className="footer-social-link">
                    <span className="sr-only">Dribbble</span>
                    <Image className="size-6 invert" src={dribbble} alt="Dribbble" />
                  </Link>
                  <div className="bg-secondary/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.behance.net" className="footer-social-link">
                    <span className="sr-only">Behance</span>
                    <Image className="size-6 invert" src={behance} alt="Behance" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/home" className="footer-link-v2">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/credit-cards" className="footer-link-v2">
                        Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="footer-link-v2">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-secondary/70 font-normal">
              Copyright &copy;NextSaaS – smart application for modern business
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

FooterOne.displayName = 'FooterOne';
export default FooterOne;
