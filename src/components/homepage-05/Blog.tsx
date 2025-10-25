import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';

interface BlogProps {
  badgeClass?: string;
  data?: any;
}

const Blog = ({ badgeClass, data }: BlogProps) => {
  const { label, title, description, recentNews } = data || {};
  console.log(data, 'blog section data');
  // Handle case where we have less than 3 blog posts
  const blogs = recentNews || [];
  const firstBlog = blogs[0];
  const secondBlog = blogs[1];
  const thirdBlog = blogs[2];

  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="text-center">
            {label && (
              <RevealAnimation delay={0.1}>
                <span className={cn(badgeClass, 'badge badge-green mb-5')} aria-label="Section category">
                  {label}
                </span>
              </RevealAnimation>
            )}
            {title && (
              <RevealAnimation delay={0.2}>
                <h2 id="blog-section-heading" className="mb-3">
                  {title}
                </h2>
              </RevealAnimation>
            )}
            {description && (
              <RevealAnimation delay={0.3}>
                <p>{description}</p>
              </RevealAnimation>
            )}
          </div>
          {/* blog section  */}
          {blogs.length > 0 && (
            <div className="grid grid-cols-12 justify-center gap-y-8 lg:gap-x-8">
              {/* blog 01  */}
              {firstBlog && (
                <RevealAnimation delay={0.4}>
                  <BlogCardV2 blog={firstBlog} />
                </RevealAnimation>
              )}
              {/* blog 02 and 03  */}
              <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                <div className="flex flex-col gap-y-8">
                  {/* blog 02  */}
                  {secondBlog && (
                    <RevealAnimation delay={0.5}>
                      <BlogCardV3 blog={secondBlog} />
                    </RevealAnimation>
                  )}

                  {/* blog 03  */}
                  {thirdBlog && (
                    <RevealAnimation delay={0.6}>
                      <BlogCardV3 blog={thirdBlog} />
                    </RevealAnimation>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
Blog.displayName = 'Blog';
export default Blog;
