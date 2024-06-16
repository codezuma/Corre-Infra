import ContactForm from "./shared/contact-form";

const ContactSection = ()=>{
    return  <>
    <section className="flex md:py-20 py-10 mx-autog container-main gap-20 md:flex-row flex-col-reverse">
       
        <div className="flex-1 box-border">
        <h2 className="text-3xl md:hidden block font-semibold text-primary mb-4">Contact us</h2>
            <div className="bg-primary text-white p-8 border-r-[16px] box-border border-b-[16px] border-secondary">
                <ContactForm/>
            </div>
        </div>
    </section>
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-18 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block text-white">Contact us?</span>
          <span className="block text-secondary">Reach out to us .</span>
        </h2>
        <div className=" flex lg:mt-0 lg:flex-shrink-0">
        <dl className="space-y-6">
            <dt><span className="sr-only">Phone number</span></dt>
            <dd className="flex text-base text-indigo-50">
              <svg className="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917033321333"  className="ml-3">+91-70333-21333              </a>
            </dd>
            <dt><span className="sr-only">Email</span></dt>
            <dd className="flex text-base text-indigo-50">
              <svg className="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="ml-3">correinfrastructures@gmail.com</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    </>
    
};

export default ContactSection;