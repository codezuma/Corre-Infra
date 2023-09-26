import Link from "next/link";
import ContactDialog from "./shared/contact-dialog";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center ml-4 text-white text-2xl text-primary font-semibold whitespace-nowrap dark:text-white">
            Corre Infra
          </span>
        </Link>
        <div className="flex md:order-2">
          <ContactDialog>
          <button type="button" className="button button-primary">
            Contact now
          </button>
          </ContactDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
