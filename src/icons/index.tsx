import { cn } from '@/utils/cn';
import { FC } from 'react';

interface IconProps {
  className?: string;
}

// Used in: homepage-04/Pricing, shared/cta/CTACheckList
const CheckIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path
      d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
      className={cn('fill-white dark:fill-black', className)}
    />
  </svg>
);

// Used in: shared/card/BlogCardV2, BlogCardV3
const CalendarIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <path
        d="M6.66602 1.66666V4.16666M13.3327 1.66666V4.16666M2.91602 7.57499H17.0827M18.3327 7.08332V14.1667C18.3327 16.6667 17.0827 18.3333 14.166 18.3333H5.83268C2.91602 18.3333 1.66602 16.6667 1.66602 14.1667V7.08332C1.66602 4.58332 2.91602 2.91666 5.83268 2.91666H14.166C17.0827 2.91666 18.3327 4.58332 18.3327 7.08332Z"
        stroke="#ECE8FF"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0791 11.4167H13.0866M13.0791 13.9167H13.0866M9.99607 11.4167H10.0036M9.99607 13.9167H10.0036M6.91191 11.4167H6.91939M6.91191 13.9167H6.91939"
        stroke="#ECE8FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Used in: shared/card/BlogCardV2, BlogCardV3
const StopwatchIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <path
        d="M10.0007 18.3333C13.9507 18.3333 17.159 15.125 17.159 11.175C17.159 7.22501 13.9507 4.01667 10.0007 4.01667C6.05065 4.01667 2.84232 7.22501 2.84232 11.175C2.84232 15.125 6.05065 18.3333 10.0007 18.3333Z"
        stroke="#ECE8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V11.6667M7.5 1.66667H12.5M15.3083 5.11667L15.9917 4.43334M4.00833 4.43334L4.69167 5.11667"
        stroke="#ECE8FF"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Used in: shared/SocialIcon
const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <path
        d="M15 1.66666H12.5C11.3949 1.66666 10.3351 2.10564 9.55372 2.88704C8.77232 3.66844 8.33334 4.72825 8.33334 5.83332V8.33332H5.83334V11.6667H8.33334V18.3333H11.6667V11.6667H14.1667L15 8.33332H11.6667V5.83332C11.6667 5.61231 11.7545 5.40035 11.9107 5.24407C12.067 5.08779 12.2790 4.99999 12.5 4.99999H15V1.66666Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Used in: shared/SocialIcon
const LinkedinIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <path
        d="M13.3333 6.66666C14.6594 6.66666 15.9312 7.19344 16.8689 8.13112C17.8065 9.0688 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7754 9.99999 13.3333 9.99999C12.8913 9.99999 12.4673 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V17.5H8.33334V11.6667C8.33334 10.3406 8.86012 9.0688 9.7978 8.13112C10.7355 7.19344 12.0073 6.66666 13.3333 6.66666Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7.5H1.66667V17.5H5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33333 5C4.25381 5 5 4.25381 5 3.33333C5 2.41286 4.25381 1.66667 3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333C1.66667 4.25381 2.41286 5 3.33333 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Used in: shared/SocialIcon
const GithubIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <g clipPath="url(#clip0_2029_25820)">
        <path
          d="M13.3333 17.5V14.5667C13.3628 14.206 13.3154 13.8432 13.1945 13.5021C13.0735 13.161 12.8819 12.8493 12.6333 12.5875C15 12.325 17.5 11.4167 17.5 7.58751C17.4997 6.62054 17.1359 5.69119 16.4833 4.98751C16.7933 4.13862 16.7708 3.20231 16.4208 2.36918C16.4208 2.36918 15.5917 2.10668 13.3333 3.60834C11.4167 3.10169 9.3833 3.10169 7.46664 3.60834C5.20831 2.10668 4.37914 2.36918 4.37914 2.36918C4.02917 3.20231 4.00664 4.13862 4.31664 4.98751C3.65837 5.69676 3.29425 6.63463 3.29998 7.60834C3.29998 11.4083 5.79998 12.3167 8.16665 12.6083C7.92215 12.8661 7.73344 13.1722 7.61248 13.5068C7.49152 13.8414 7.44099 14.1971 7.46414 14.5517V17.5M7.46414 15.8333C3.33331 17.0833 3.33331 13.75 1.66664 13.3333L7.46414 15.8333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2029_25820">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Used in: shared/SocialIcon
const DribbleIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={cn('', className)}>
      <g clipPath="url(#clip0_2029_25826)">
        <path
          d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6024 1.66666 10 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 10C1.66666 14.6024 5.39762 18.3333 10 18.3333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.40831 2.43335C7.40831 2.43335 5.83331 7.50001 12.9166 10.8333M17.575 7.40835C17.575 7.40835 15.7416 9.71668 9.99998 9.16668C4.25831 8.61668 2.43331 6.04168 2.43331 6.04168M17.2083 12.5917C17.2083 12.5917 14.175 10.0167 8.33331 12.4167C2.49165 14.8167 2.78331 17.5667 2.78331 17.5667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2029_25826">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CheckIcon, CalendarIcon, StopwatchIcon, FacebookIcon, LinkedinIcon, GithubIcon, DribbleIcon };
