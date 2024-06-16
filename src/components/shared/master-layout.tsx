const MasterLayoutSection = () => {
    return (
      <section>
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="block text-3xl font-bold text-primary sm:text-4xl md:text-5xl dark:text-white">
                Masterful Layout 
              </h1>
            
            </div>
  
            <div className="mt-10 relative max-w-5xl mx-auto">
              <div className="w-full object-cover  border-primary border-2   bg-no-repeat bg-center bg-cover ">
               <img src="/assets/images/map.jpg" alt="" />
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
  
  export default MasterLayoutSection;
