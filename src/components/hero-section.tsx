import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-primary w-full ">
          <img className='absolute top-0 right-0 z-0  h-full'  src="/assets/images/line-pattern.svg" alt="" />
      <section className=" flex container-main md:gap-20 gap-10 items-center md:flex-row flex-col  relative z-10  py-24  min-h-screen ">
       
        <div className="flex-1">
        <h1 className="w-full md:text-6xl text-white text-4xl mb-6 font-semibold !leading-snug">
        Building Dreams, Developing Futures
        </h1>
        <p className="md:text-xl text-lg text-gray-300 w-full ">
          — Welcome to Corre Infra - Your Trusted Partner in Real Estate Development
.
        </p>
        <div className="mt-12  flex md:flex-row flex-col  gap-4">
          <button className="button-outline text-gray-700 button-large">
            Learn more
          </button>
          <button className="button-secondary button-large">Get in touch</button>
        </div>
        <Image width={50} height={50} className='animate-spin absolute bottom-4 ease-linear duration-5s w-24 h-24'  src="/assets/images/best-property.svg" alt="" />
        </div>
        <div className='w-full flex-1 rounded-md bg-[url("/assets/images/hero-image.png")] h-60 md:h-96 xl:h-[516px] bg-no-repeat bg-bottom bg-cover'></div>
      </section>
    </div>
  );
};

export default HeroSection;
