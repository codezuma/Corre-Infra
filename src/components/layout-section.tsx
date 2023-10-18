const LayoutSection = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-primary sm:text-4xl md:text-5xl dark:text-white">
              Masterful Area <span className="text-secondary">Design</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              {`            Discover a meticulously designed layout that harmoniously blends modernity, aesthetics, and functionality. Explore Corre Infra's vision in every inch of the area.            

`}
            </p>{" "}
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] border-primary border-2 border bg-[url('/assets/images/layout.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

            <div className="absolute inset-0 w-full h-full">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <a href="/assets/sectorial-plan.pdf" hrefLang="/assets/sectorial-plan.pdf" download className="button-secondary text-primary" >
                  <i className="bi bi-archive-fill text-xl mr-2"></i>
                  Download Layout
                </a>
              </div>
            </div>

            <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
              <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
            </div>

            <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;
