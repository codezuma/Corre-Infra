const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="w-full md:text-4xl text-gray-900 text-3xl mb-6 font-semibold !leading-snug">
About us          </h2>
          <p className="mb-4">
{`          At Corre Infra, we don't just build structures; we craft lifestyles, foster communities, and shape the future.
`}          </p>
          <p>
          With a proud legacy of creating exceptional spaces that stand the test of time, we are committed to delivering excellence in real estate development that aligns with RERA (Real Estate Regulatory Authority) standards.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};


export default AboutSection;