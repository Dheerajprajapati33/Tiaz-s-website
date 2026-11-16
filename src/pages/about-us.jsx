import React from "react";
import { Link } from "../site-router";
import { Hero } from "../components/page-layout";
import {
  ArrowRight,
  ShieldCheck,
  Coins,
  Wallet,
  Truck,
  LockKeyhole,
  Headphones,
} from "lucide-react";
import tiazIcon from "../assets/tiaz-icon.png";

export function About() {
  return (
    <>
      <Hero
        kicker="A little about us"
        title="Gold. Silver. Simplicity."
        description="Tia'z Financial Solutions brings essential digital precious-metal features together in a clean, mobile-first experience."
      />
      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="page-kicker">Our introduction</p>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight mt-5">
              Precious metals for a{" "}
              <span className="gold-text">digital-first world.</span>
            </h2>
            <p className="mt-7 leading-8 text-[#66776a]">
              Tia'z is an app experience designed around digital gold and
              silver. It brings account registration, applicable KYC checks,
              gold and silver transaction journeys, portfolio visibility and
              related services into one place.
            </p>
            <p className="mt-5 leading-8 text-[#66776a]">
              The application also includes wallet-related features, transaction
              history and selected physical precious-metal product journeys,
              depending on availability, eligibility and the applicable partner
              arrangements.
            </p>
            <Link to="/contact-us" className="gold-button mt-8">
              Get in touch <ArrowRight size={17} />
            </Link>
          </div>
          <div className="bg-forest rounded-[34px] min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute border border-[#d0b071]/30 rounded-full w-[400px] h-[400px]" />
            <div className="absolute border border-[#d0b071]/30 rounded-full w-[290px] h-[290px]" />
            <img
              src={tiazIcon}
              className="w-[195px] h-[195px] object-contain rounded-full relative z-10 bg-[#fffdf6] p-3"
              alt="Tia'z icon"
            />
            <span className="absolute bottom-8 text-[#e7c988] font-display text-2xl">
              Value in every step.
            </span>
          </div>
        </div>
      </section>
      <section className="section bg-[#f1eee4]">
        <div className="container-wide">
          <p className="page-kicker text-center">What you can explore</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest text-center mt-4">
            One connected experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              [
                Coins,
                "Digital gold & silver",
                "Explore buying, selling and precious-metal account journeys.",
              ],
              [
                Wallet,
                "Portfolio & wallet",
                "Review holdings, available wallet tools and transaction activity.",
              ],
              [
                Truck,
                "Physical products",
                "Discover eligible coin or bar products and delivery options when offered.",
              ],
              [
                ShieldCheck,
                "Verification",
                "Complete requested identity and bank-account checks.",
              ],
              [
                LockKeyhole,
                "Account controls",
                "Manage account details and follow secure access practices.",
              ],
              [
                Headphones,
                "Support",
                "Find product information, legal disclosures and assistance pathways.",
              ],
            ].map(([Icon, t, d]) => (
              <div key={t} className="info-card">
                <Icon size={30} className="text-[#b38b43]" />
                <h3 className="font-display text-2xl mt-5 text-forest">{t}</h3>
                <p className="text-sm text-[#67786a] leading-7 mt-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-wide max-w-[900px] text-center">
          <p className="page-kicker">A clear approach</p>
          <h2 className="font-display text-4xl text-forest mt-5">
            Understand before you transact.
          </h2>
          <p className="text-[#67786a] leading-8 mt-6">
            Precious-metal prices fluctuate, and buy/sell rates, charges, taxes,
            redemption and delivery options can vary. We encourage users to
            review transaction-level disclosures and policies instead of
            assuming a guaranteed outcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/terms-condition" className="outlined-button">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="outlined-button">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
