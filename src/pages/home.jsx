import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Coins,
  Truck,
  LockKeyhole,
  ChevronDown,
  Check,
  ChartNoAxesCombined,
  Smartphone,
  Headphones,
  Gem,
  CircleHelp,
  CreditCard,
  BadgeCheck,
} from "lucide-react";
import { Link } from "../site-router";
import tiazIcon from "../assets/tiaz-icon.png";

const aboutDoc = "/legal/Tiaz_About_Us.pdf";
const features = [
  {
    Icon: Coins,
    title: "Buy Digital Gold",
    desc: "Explore gold purchases through an easy-to-follow digital journey.",
  },
  {
    Icon: Gem,
    title: "Explore Digital Silver",
    desc: "Discover silver buying and selling features alongside gold.",
  },
  {
    Icon: ChartNoAxesCombined,
    title: "Portfolio Overview",
    desc: "View your holdings and transaction history in one place.",
  },
  {
    Icon: Wallet,
    title: "Wallet & Withdrawals",
    desc: "Access wallet and withdrawal-related features within the app.",
  },
  {
    Icon: Truck,
    title: "Physical Metal Products",
    desc: "Browse supported coins and bars, with delivery subject to availability and terms.",
  },
  {
    Icon: ShieldCheck,
    title: "KYC & Account Checks",
    desc: "Identity and bank verification workflows help support eligible transactions.",
  },
];
const faqs = [
  {
    q: "What is Tia’z?",
    a: "Tia’z Financial Solutions is a mobile application experience for digital gold and silver, portfolio viewing, and related precious-metal services.",
  },
  {
    q: "Can I buy and sell digital gold and silver?",
    a: "The app includes gold and silver buy/sell journeys. Actual transactions, limits, quotes and eligibility depend on the app’s active service arrangements and verified terms.",
  },
  {
    q: "Are gold and silver prices guaranteed?",
    a: "No. Gold and silver prices can fluctuate, and buying and selling prices may differ. Returns are not guaranteed.",
  },
  {
    q: "Is KYC required?",
    a: "Certain functions may require identity, bank or other verification before a transaction can be completed.",
  },
  {
    q: "How can I get the app?",
    a: "A verified public app-store listing has not yet been supplied. The download button will be activated once the official store URL is added.",
  },
];
function ScrollLink({ to, children, className = "", onClick }) {
  return (
    <a
      href={"/#" + to}
      className={className}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (window.location.pathname !== "/") {
          e.preventDefault();
          window.history.pushState({}, "", "/#" + to);
          window.dispatchEvent(new Event("tiaz:navigate"));
          setTimeout(() => document.getElementById(to)?.scrollIntoView(), 40);
        }
      }}
    >
      {children}
    </a>
  );
}
function Phone() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[610px] md:min-h-[670px]"
      aria-label="Illustrative Tia'z app interface concept"
    >
      <div className="absolute w-[430px] h-[430px] rounded-full border border-[#dcc492]/40" />
      <div className="absolute w-[530px] h-[530px] rounded-full border border-[#dcc492]/30" />
      <div className="absolute top-[16%] left-[0%] md:left-[2%] float-1 bg-white rounded-2xl soft-shadow px-5 py-4 z-20">
        <span className="text-[11px] text-[#7a8a7c]">Explore metals</span>
        <div className="flex gap-2 items-center mt-1 text-sm font-bold">
          <span className="w-7 h-7 rounded-full bg-[#f5e5c2] grid place-items-center text-[#ac833e]">
            Au
          </span>{" "}
          Gold & Silver
        </div>
      </div>
      <div className="absolute bottom-[18%] right-[-3%] md:right-[0%] float-2 bg-white rounded-2xl soft-shadow px-5 py-4 z-20">
        <div className="flex gap-2 items-center text-sm font-bold text-forest">
          <ShieldCheck size={18} className="text-[#a7833d]" /> Account checks
        </div>
        <div className="text-[11px] text-[#7a8a7c] mt-1">
          Designed for clarity
        </div>
      </div>
      <div className="phone z-10">
        <div className="phone-top">
          <div className="notch absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <img
                src={tiazIcon}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-[13px] font-semibold">
                Tia'z{" "}
                <div className="text-[8px] tracking-wider opacity-70">
                  FINANCIAL SOLUTIONS
                </div>
              </div>
            </div>
            <div className="border border-white/30 rounded-full p-2">
              <Wallet size={17} />
            </div>
          </div>
          <div className="text-[12px] opacity-70 mt-8">
            Your metals, in one place
          </div>
          <div className="font-display text-[25px] mt-1">Own your future.</div>
          <div className="flex gap-2 mt-5">
            <span className="bg-white/20 rounded-full text-[10px] px-3 py-1">
              Digital Gold
            </span>
            <span className="bg-white/20 rounded-full text-[10px] px-3 py-1">
              Digital Silver
            </span>
          </div>
        </div>
        <div className="p-4 bg-[#f8f8f3] min-h-[320px]">
          <div className="balance-card">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#6e674f] font-semibold">
                Your portfolio
              </span>
              <TrendingUp size={16} className="text-[#967137]" />
            </div>
            <div className="mt-2 text-[22px] font-display text-forest">
              Your wealth journey
            </div>
            <div className="text-[10px] text-[#827860] mt-1">
              Track your holdings in the app
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full bg-forest text-white text-[10px] py-2 px-4">
                Buy Gold
              </span>
              <span className="rounded-full border border-[#ac9b7a] text-[10px] py-2 px-4">
                Explore Silver
              </span>
            </div>
          </div>
          <div className="mt-5 text-[13px] font-bold">
            Explore precious metals
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-white rounded-xl p-3">
              <div className="coin w-10 h-10 text-[13px]">Au</div>
              <div className="font-bold text-[12px] mt-2">Gold</div>
              <span className="text-[10px] text-gray-400">Digital metal</span>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="coin w-10 h-10 text-[13px] grayscale">Ag</div>
              <div className="font-bold text-[12px] mt-2">Silver</div>
              <span className="text-[10px] text-gray-400">Digital metal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <main id="home">
        <section className="hero-pattern overflow-hidden">
          <div className="container-wide grid lg:grid-cols-2 gap-2 items-center min-h-[740px]">
            <div className="pt-16 lg:pt-0 relative z-10">
              <div className="pill">
                <span className="h-[1px] w-8 bg-[#ae8847]" /> A smarter way to
                explore precious metals
              </div>
              <h1 className="font-display text-[52px] sm:text-[66px] lg:text-[73px] leading-[1.1] mt-6 max-w-[650px] text-forest">
                A golden future <span className="gold-text">begins here.</span>
              </h1>
              <p className="mt-7 text-[#65746a] text-[16px] sm:text-[18px] leading-8 max-w-[510px]">
                Discover digital gold and silver, follow your holdings, and
                explore precious-metal services with Tia'z Financial Solutions —
                all from one mobile experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-9">
                <ScrollLink to="features" className="gold-button">
                  Explore Features <ArrowRight size={18} />
                </ScrollLink>
                <ScrollLink to="how-it-works" className="outlined-button">
                  How It Works <ArrowUpRight size={17} />
                </ScrollLink>
              </div>
              <div className="mt-12 flex items-center gap-5 border-t border-[#dfdccc] pt-6 max-w-[460px]">
                <div className="flex -space-x-3">
                  <span className="w-10 h-10 rounded-full bg-[#dbc79b] border-2 border-[#fbf9f4] grid place-items-center">
                    <Coins size={19} />
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#c9d8cf] border-2 border-[#fbf9f4] grid place-items-center">
                    <Wallet size={19} />
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#e4decf] border-2 border-[#fbf9f4] grid place-items-center">
                    <ShieldCheck size={19} />
                  </span>
                </div>
                <span className="text-xs leading-5 text-[#65746a]">
                  Digital metals · Portfolio insights
                  <br />A connected app experience
                </span>
              </div>
            </div>
            <Phone />
          </div>
        </section>
        <section className="bg-forest py-7">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-6 text-[#ecf2eb]">
            {[
              [Coins, "Digital Gold"],
              [Gem, "Digital Silver"],
              [ChartNoAxesCombined, "Portfolio Tracking"],
              [ShieldCheck, "Account Verification"],
            ].map(([Icon, t]) => (
              <div
                key={t}
                className="flex items-center gap-3 justify-center text-sm font-semibold"
              >
                <Icon size={19} className="text-[#d6bd83]" />
                {t}
              </div>
            ))}
          </div>
        </section>
        <section className="section" id="features">
          <div className="container-wide">
            <div className="text-center max-w-[730px] mx-auto">
              <div className="pill justify-center">What you can do</div>
              <h2 className="font-display text-4xl md:text-5xl text-forest mt-5">
                Everything precious,{" "}
                <span className="gold-text">in one place.</span>
              </h2>
              <p className="text-[#718076] mt-5 leading-7">
                Explore the core features of the Tia'z mobile application
                through a straightforward, modern experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {features.map(({ Icon, title, desc }, i) => (
                <article
                  key={title}
                  className="feature-card rounded-[22px] border border-[#e7e4d9] bg-white p-8 min-h-[240px]"
                >
                  <div className="w-14 h-14 rounded-[17px] bg-[#f6f0e4] grid place-items-center text-[#ab843f]">
                    <Icon size={25} />
                  </div>
                  <h3 className="font-display text-[23px] text-forest mt-6">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#708078]">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section bg-[#f0eee4] overflow-hidden"
          id="how-it-works"
        >
          <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative min-h-[410px] flex items-center justify-center">
              <div className="absolute w-[360px] h-[360px] rounded-full bg-[#e6dbbd]" />
              <div className="relative bg-white rounded-[30px] p-8 w-full max-w-[370px] soft-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-forest">
                    Your journey
                  </span>
                  <BadgeCheck className="text-[#bc9655]" />
                </div>
                <div className="mt-8 space-y-5">
                  {[
                    [
                      1,
                      "Create your account",
                      "Start with your mobile app profile",
                    ],
                    [
                      2,
                      "Complete required checks",
                      "Verify details when requested",
                    ],
                    [
                      3,
                      "Explore gold & silver",
                      "View features and available products",
                    ],
                    [
                      4,
                      "Track your holdings",
                      "See portfolio and transaction activity",
                    ],
                  ].map(([n, t, d]) => (
                    <div className="flex gap-4" key={n}>
                      <div className="w-9 h-9 rounded-full bg-[#eee3cb] text-[#8b6c35] font-bold text-sm shrink-0 grid place-items-center">
                        {n}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{t}</div>
                        <div className="text-xs text-[#7b877e] mt-1">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="pill">Simple by design</div>
              <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight text-forest">
                A simple experience,{" "}
                <span className="gold-text">from the very start.</span>
              </h2>
              <p className="mt-6 text-[#6e7c70] leading-8">
                Whether you're discovering precious metals for the first time or
                reviewing existing holdings, Tia'z brings essential account,
                metal, and transaction tools into a familiar mobile flow.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Explore digital gold and silver",
                  "Review transaction history and portfolio",
                  "Manage verification and account details",
                ].map((t) => (
                  <div
                    className="flex items-center gap-3 text-sm font-semibold"
                    key={t}
                  >
                    <Check size={18} className="text-[#ac8c50]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">About Tia'z</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mt-5 text-forest">
                Where modern convenience meets{" "}
                <span className="gold-text">timeless value.</span>
              </h2>
              <p className="text-[#6d7d70] leading-8 mt-7">
                Tia'z Financial Solutions is a mobile-first experience focused
                on making digital gold and silver services easier to explore.
                The app brings together transaction journeys, portfolio
                information, account verification, and selected physical
                precious-metal products.
              </p>
              <p className="text-[#6d7d70] leading-8 mt-4">
                Our website introduces the experience. For charges, eligibility,
                service providers, delivery conditions, and transaction-specific
                rules, review the official in-app disclosures and published
                legal documents.
              </p>
              <a className="outlined-button mt-8" href="/about-us">
                Read About Us <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="relative bg-[#17372c] rounded-[32px] p-10 md:p-16 min-h-[430px] overflow-hidden flex items-center justify-center">
              <div className="absolute rounded-full border border-[#ac8e5e]/30 w-[440px] h-[440px]" />
              <div className="absolute rounded-full border border-[#ac8e5e]/30 w-[330px] h-[330px]" />
              <div className="coin w-[235px] h-[235px] text-[90px] relative z-10">
                Au
              </div>
              <div className="absolute bottom-8 left-10 text-[#f2e6c8] font-display text-2xl">
                Value worth exploring.
              </div>
              <div className="absolute top-8 right-9 text-[#d8be86]">
                <Gem size={36} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#e9e1cc] py-8">
          <div className="container-wide flex flex-wrap justify-center md:justify-between items-center gap-6 text-[#425343] text-sm">
            {[
              [LockKeyhole, "Account-focused workflows"],
              [CreditCard, "Payment journeys"],
              [Truck, "Physical product options"],
              [Headphones, "Support features"],
            ].map(([Icon, t]) => (
              <div key={t} className="flex items-center gap-2 font-semibold">
                <Icon size={18} className="text-[#9b7d49]" />
                {t}
              </div>
            ))}
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container-wide grid lg:grid-cols-[.75fr,1.25fr] gap-14">
            <div>
              <div className="pill">Have questions?</div>
              <h2 className="font-display text-4xl md:text-5xl text-forest mt-5">
                Frequently asked <span className="gold-text">questions.</span>
              </h2>
              <p className="text-[#6e7c70] leading-8 mt-6">
                A few useful things to know before getting started.
              </p>
              <CircleHelp
                size={110}
                strokeWidth={0.6}
                className="text-[#d7c49b] mt-8"
              />
            </div>
            <div className="border-t border-[#e3e0d5]">
              {faqs.map((f, i) => (
                <div key={f.q} className="border-b border-[#e3e0d5]">
                  <button
                    className="w-full py-6 text-left flex justify-between gap-4 items-center text-[15px] font-bold text-forest"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {f.q}
                    <ChevronDown
                      size={18}
                      className={
                        "shrink-0 transition-transform " +
                        (openFaq === i ? "rotate-180" : "")
                      }
                    />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer text-[#718075] text-sm leading-7 pb-6 max-w-[620px]">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16" id="download">
          <div className="container-wide">
            <div className="bg-forest rounded-[32px] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-9">
              <div className="absolute rounded-full w-[500px] h-[500px] border border-[#ebd3a4]/20 -right-[150px] -top-[240px]" />
              <div className="relative max-w-[660px]">
                <div className="pill text-[#e1c58c]">The Tia'z experience</div>
                <h2 className="font-display text-[#fff9ea] text-4xl md:text-5xl mt-5 leading-tight">
                  Precious metals,{" "}
                  <span className="text-[#d6b676]">simplified.</span>
                </h2>
                <p className="mt-5 text-[#c8d6cc] leading-7">
                  Your journey with digital gold and silver can start with a
                  single mobile experience.
                </p>
              </div>
              <div className="relative shrink-0">
                <span className="inline-flex items-center gap-3 bg-[#eee2c9] text-forest rounded-full px-7 py-4 text-sm font-bold">
                  <Smartphone size={20} /> App link coming soon
                </span>
                <div className="text-[#a9bfb2] text-xs mt-3 text-center">
                  Official store URL to be confirmed
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
