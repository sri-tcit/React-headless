import LinkButton from '@/components/ui/button/LinkButton';
import { CalendarIcon, StopwatchIcon } from '@/icons';
import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardV2Props {
  blog: IBlogPost;
  className?: string;
}

const BlogCardV2 = ({ blog, className }: BlogCardV2Props) => {
  if (!blog) return null;

  const imageurl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '';
  const blogSlug = blog.slug || '#';
  const blogThumbnail = imageurl + blog.cover.url;
  return (
    <article className="group col-span-12 lg:col-span-5 xl:col-span-6">
      <div
        className={cn(
          'dark:bg-background-6 scale-100 space-y-10 rounded-[20px] bg-white transition-transform duration-500 group-hover:scale-[101%] group-hover:transition-transform group-hover:duration-500',
          className,
        )}>
        {/* link  */}

        {/* blog img  */}
        <figure className="w-full overflow-hidden rounded-[20px] lg:h-[352px] xl:h-[367px] xl:max-w-[629px]">
          <Link href={`/blog/${blogSlug}`}>
            <Image
              src={blogThumbnail}
              alt={blog.title || 'Blog post illustration'}
              className="size-full object-cover"
              loading="lazy"
              width={629}
              height={367}
            />
          </Link>
        </figure>
        {/* blog content  */}
        <div className="px-5 pb-8 sm:px-8">
          {/* blog badge  */}
          {blog?.badges && blog.badges.length > 0 && (
            <div className="mb-6 space-x-2">
              {blog.badges.map((badge: any, index: number) => (
                <span className="badge badge-gray-light" key={index}>
                  {badge.badge}
                </span>
              ))}
            </div>
          )}
          {/* time and title  */}
          <div className="mb-7 space-y-4">
            {/* blog time  */}
            <div className="flex items-center">
              {/* publish data  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <CalendarIcon />
                </span>
                <time dateTime="2025-05-14" className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                  {blog.date}
                </time>
              </div>
              <div className="text-stroke-2 dark:text-stroke-6 px-4" aria-hidden="true">
                |
              </div>
              {/* time  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <StopwatchIcon />
                </span>
                <span className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                  {blog.readTime || '5 min read'}
                </span>
              </div>
            </div>
            {/* blog title  */}
            <h3 className="text-heading-6 xl:text-heading-5 line-clamp-1">
              <Link href={`/blog/${blogSlug}`} aria-label={`Read full article about ${blog.title || 'this post'}`}>
                {blog.title || 'Untitled Post'}
              </Link>
            </h3>
          </div>
          {/* blog link tag  */}
          <div>
            <LinkButton
              href={`/blog/${blogSlug}`}
              className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};
BlogCardV2.displayName = 'BlogCardV2';
export default BlogCardV2;
