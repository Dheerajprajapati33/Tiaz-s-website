import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "../site-router";
import tiazIcon from "../assets/tiaz-icon.png";

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/", "Home"],
    ["/about-us", "About Us"],
    ["/privacy-policy", "Privacy Policy"],
    ["/terms-condition", "Terms"],
    ["/contact-us", "Contact Us"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f4]/95 backdrop-blur border-b border-[#eae5d9]">
      <div className="container-wide h-20 flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src={tiazIcon}
            alt="Tia'z Financial Solutions icon"
            className="w-[54px] h-[54px] rounded-full object-contain"
          />
          <span className="leading-tight">
            <strong className="font-display text-[25px] text-forest">
              Tia'z
            </strong>
            <span className="block text-[9px] tracking-[.22em] font-bold text-[#9d824e]">
              FINANCIAL SOLUTIONS
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-base font-normal text-[#414d60]">
          {nav.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              aria-current={window.location.pathname === to ? "page" : undefined}
              className={`hover:text-[#f06416] ${
                window.location.pathname === to
                  ? "text-[#f06416]"
                  : "text-[#414d60]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle navigation"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-7 pb-7 grid gap-5 bg-[#fbf9f4] border-t border-[#eae5d9]">
          {nav.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`font-semibold ${
                window.location.pathname === to
                  ? "text-[#f06416]"
                  : "text-[#414d60]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
