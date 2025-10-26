import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';


const Solutions = ({ data }: { data: any }) => {

  const imageurl = process.env.strapi_image_url || '';


  console.log('Solutions section data:', data.serviceitems);
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-label="Mortgage Solutions">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* heading */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 id="mortgage-solutions-heading">{data.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[472px] md:w-full mx-auto">{data.description}</p>
            </RevealAnimation>
          </div>

          {/* solutions cards + btn */}
          <div className="space-y-14">
            <div className="grid grid-cols-12 items-center justify-center gap-y-7 md:gap-x-9">
              {data.serviceitems.length > 0 &&
                data.serviceitems.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <div className="p-6 sm:p-8 bg-white dark:bg-background-8 rounded-[20px] max-w-full md:max-w-[405px] w-full space-y-6 col-span-12 md:col-span-6 lg:col-span-4">
                      <img
                        src={`${imageurl}${item.icon.url}`}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="text-secondary dark:text-accent"
                      />
                      <div className="space-y-2 max-sm:mt-2">
                        <h3 id={item.headingId} className="text-heading-6 md:text-heading-5">
                          {item.title}
                        </h3>
                        <p className="line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
            </div>

            {/* btn */}
            {/* <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/career"
                  className="btn btn-secondary dark:btn-transparent btn-md w-[90%] md:w-auto mx-auto"
                  aria-label="Explore all mortgage loan types">
                  Explore all loan types
                </LinkButton>
              </div>
            </RevealAnimation> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
