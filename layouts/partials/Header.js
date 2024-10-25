import Link from "next/link";
import menu from "@config/menu.json";
import socical from "@config/social.json";
import Social from "@layouts/components/Social";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import SearchModal from "@partials/SearchModal";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const { main } = menu;

  const [searchModal, setSearchModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  // Stop scrolling when the menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [showMenu]);

  return (
    <header
      className="header bg-offwhite dark:bg-darkBlue shadow-md"
      style={{
        padding: "15px 0",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="navbar container flex justify-between items-center px-8">
        <div className="order-0">
          {/* Louise Bauer as Site Title */}
          <h1 className="text-3xl font-bold text-darkBlue dark:text-offwhite">
            <Link href="/" passHref>
              <span className="cursor-pointer">Louise Bauer</span>
            </Link>
          </h1>
        </div>

        <div className="flex items-center space-x-4 xl:space-x-8">
          <div className={`collapse-menu ${!showMenu && "translate-x-full"} lg:flex lg:translate-x-0`}>
            <button className="absolute right-6 top-11 lg:hidden" onClick={() => setShowMenu(false)}>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" />
              </svg>
            </button>
            <ul id="nav-menu" className="navbar-nav w-full md:w-auto md:space-x-1 lg:flex xl:space-x-2">
              {main.map((menu, i) => (
                <React.Fragment key={`menu-${i}`}>
                  {menu.name === "About" ? (
                    <li className="nav-item">
                      <Link href="/about" className={`nav-link block ${router.asPath === "/about" && "active"}`}>
                        <span className="text-darkBlue dark:text-offwhite hover:text-gold">Sobre</span>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link href={menu.url} className={`nav-link block ${router.asPath === menu.url && "active"}`}>
                        <span className="text-darkBlue dark:text-offwhite hover:text-gold">{menu.name}</span>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <Social source={socical} className="socials" />
          </div>
          <ThemeSwitcher />
          <div className="search-icon" onClick={() => setSearchModal(true)}>
            <IoSearch className="text-darkBlue dark:text-offwhite cursor-pointer" />
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden">
            {showMenu ? (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" />
              </svg>
            ) : (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>
        </div>

        <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
      </nav>
      {showMenu && <div className="header-backdrop absolute top-0 left-0 h-[100vh] w-full bg-black/50 lg:hidden"></div>}
    </header>
  );
};

export default Header;
