import ContactForm from "./shared/contact-form";

const ContactSection = ()=>{
    return <section className="flex md:py-20 py-10 mx-autog container-main gap-20 md:flex-row flex-col-reverse">
        <div className="flex-1">
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36078619314!2d76.82493870425402!3d28.42285832585077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d14485a1cd6e5%3A0xbf5526199036b949!2sSultanpur%20National%20Park!5e0!3m2!1sen!2sin!4v1695701362579!5m2!1sen!2sin" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex-1 box-border">
        <h2 className="text-3xl md:hidden block font-semibold text-primary mb-4">Contact us</h2>
            <div className="bg-primary text-white p-8 border-r-[16px] box-border border-b-[16px] border-secondary">
                <ContactForm/>
            </div>
        </div>
    </section>
};

export default ContactSection;