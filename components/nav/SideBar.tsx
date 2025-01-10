"use client";

import Image from "next/image";
import Link from "next/link";
import { navigationMenu } from "../../constants/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <section className="hidden border md:w-60 lg:w-72 h-full p-4 fixed bg-white md:flex flex-col justify-between">
        <header className="flex flex-col gap-4">
          {/* logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/images/logo.svg"} width={32} height={32} alt="logo" />
            <span className="font-semibold text-2xl capitalize">Dashboard</span>
          </Link>

          {/* navigation */}
          <nav className="w-full h-fit flex flex-col gap-2">
            {navigationMenu.map((menu, index) => (
              <Link
                href={menu.link}
                key={index}
                className={`flex items-center gap-2 border border-transparent py-1 px-2 rounded text-textGray group ${
                  pathname === menu.link
                    ? "bg-blue text-white"
                    : "bg-transparent hover:bg-blue hover:text-white"
                }`}
              >
                <div
                  className={`${
                    pathname === menu.link
                      ? "filter brightness-200"
                      : "group-hover:filter group-hover:brightness-200"
                  }`}
                >
                  <Image
                    src={menu.logo}
                    width={24}
                    height={24}
                    alt={menu.name}
                    className="transition-transform duration-200"
                  />
                </div>
                <span className="font-medium text-base group-hover:text-white">
                  {menu.name}
                </span>
              </Link>
            ))}
          </nav>
        </header>

        <aside className="w-full flex flex-col gap-3">
          <div className="border rounded-3xl px-6 py-5 bg-purple-gradient text-white flex flex-col gap-3 leading-tight">
            <h5 className="text-xl text-white text-center font-semibold">
              Upgrade to PRO to get access all Features!
            </h5>
            <button className="border w-full py-2 bg-white text-blue text-base font-semibold rounded-full shadow-md">
              Get Pro Now!
            </button>
          </div>

          {/* profile */}
          <div className="flex items-center gap-3 w-full">
            <div className="w-11 h-11 shadow rounded-full border">
              <Image
                src={"/images/profile.png"}
                width={44}
                height={44}
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h5 className="text-dark text-lg font-semibold">Evano</h5>
              <p className="text-base text-textGray font-light -mt-1">
                Project Manager
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* mobile navigation */}
      <header className="md:hidden w-full px-4 py-2 bg-white rounded shadow container mx-auto my-2 relative">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/images/logo.svg"} width={32} height={32} alt="logo" />
            <span className="font-semibold text-2xl capitalize">Dashboard</span>
          </Link>
          {/* menu icon */}
          <div>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-xl uppercase font-light underline"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* menu list */}
        {isMenuOpen && (
          <div className="border shadow-md w-1/2 h-fit rounded px-4 py-3 mt-2 absolute right-0 bg-white/10 backdrop-blur z-10">
            <nav className="w-full h-full flex flex-col gap-2">
              {navigationMenu.map((menu, index) => (
                <Link
                  href={menu.link}
                  key={index}
                  className={`flex items-center gap-2 border border-transparent py-1 px-2 rounded text-textGray group ${
                    pathname === menu.link
                      ? "bg-blue text-white"
                      : "bg-transparent hover:bg-blue hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className={`${
                      pathname === menu.link
                        ? "filter brightness-200"
                        : "group-hover:filter group-hover:brightness-200"
                    }`}
                  >
                    <Image
                      src={menu.logo}
                      width={24}
                      height={24}
                      alt={menu.name}
                      className="transition-transform duration-200"
                    />
                  </div>
                  <span className="font-medium text-base group-hover:text-white">
                    {menu.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default SideBar;
