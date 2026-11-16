import React from "react";
import { Link } from "../site-router";
import tiazIcon from "../assets/tiaz-icon.png";

function Footer() {
  return (
    <footer className="bg-[#10281f] text-[#e5ece5] pt-16 pb-7">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-10 pb-12">
          <div className="md:col-span-2 max-w-[390px]">
            <div className="flex items-center gap-3">
              <img
                src={tiazIcon}
                className="w-16 h-16 rounded-full object-contain bg-[#fcf9ee]"
                alt="Tia'z icon"
              />
              <div>
                <div className="font-display text-3xl">Tia'z</div>
                <div className="text-[10px] tracking-[.2em] text-[#d6b676]">
                  FINANCIAL SOLUTIONS
                </div>
              </div>
            </div>
            <p className="text-[#aabdb1] text-sm leading-7 mt-5">
              Discover digital gold and silver, portfolio-related features and
              precious-metal services through Tia'z Financial Solutions.
            </p>
          </div>
          <div>
            <div className="font-bold mb-5">Quick links</div>
            <div className="flex flex-col gap-4 text-sm text-[#aabdb1]">
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div>
            <div className="font-bold mb-5">Legal & support</div>
            <div className="flex flex-col gap-4 text-sm text-[#aabdb1]">
              <Link to="/terms-condition">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="text-xs text-[#a3b3a8]">
                Official contact details to be confirmed
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#466052] pt-7 flex flex-col md:flex-row gap-3 justify-between text-[#a8bbad] text-xs">
          <span>
            © {new Date().getFullYear()} Tia'z Financial Solutions. All rights
            reserved.
          </span>
          <span>
            Market prices fluctuate. No guaranteed returns. Legal text requires
            review.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
