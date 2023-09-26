import Link from "next/link";
import ContactDialog from "./shared/contact-dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll status

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
      const scrollY = window.scrollY || window.pageYOffset;
      const shouldAddBg = scrollY > 100; // Adjust the value as needed

      // Update the state to add/remove the background color class
      setIsScrolled(shouldAddBg);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
    className={`${
      isScrolled ? 'bg-secondary shadow-sm !text-secondary-foreground' : 'bg-transparent text-white dark:bg-gray-900'
    } fixed w-full z-20 top-0 left-0 dark:border-gray-600`}
  >      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center ml-4  text-2xl  font-semibold whitespace-nowrap ">
            Corre Infra
          </span>
        </Link>
        <div className="flex md:order-2">
          <ContactDialog>
          <button type="button" className={`button ${isScrolled?'button-primary':'button-secondary'}`}>
            Contact now
          </button>
          </ContactDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
