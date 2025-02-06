import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0  bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md" />
            <Image
              src={logoImage}
              alt="sans logo"
              className="size-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          {/* navbar for big screens */}
          <nav className="hidden sm:flex gap-6 items-center ">
            <a
              href="#"
              className="text-white text-opacity-60  hover:text-opacity-90 transition-opacity "
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-60  hover:text-opacity-90 transition-opacity "
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-90 transition-opacity "
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-60  hover:text-opacity-90 transition-opacity "
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-60  hover:text-opacity-90 transition-opacity "
            >
              Customer
            </a>
            <button className="px-4 py-2 rounded-[8px] bg-white text-nowrap">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
