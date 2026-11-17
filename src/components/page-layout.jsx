import React from "react";
import { Link } from "../site-router";

const legalNotice =
  "Publication checklist: Confirm the legal entity, operational partners, applicable fee and refund rules, data flows and retention schedules, grievance contact, and current regulatory requirements before treating this draft as a final policy.";

export const COMPANY = {
  legalName: "[REGISTERED LEGAL ENTITY NAME — TO BE CONFIRMED]",
  registeredAddress: "[REGISTERED BUSINESS ADDRESS — TO BE CONFIRMED]",
  supportEmail: "Info@tiaz.com",
  supportPhone: "+91 93121 25125",
  grievanceContact: "[GRIEVANCE OFFICER NAME & CONTACT — TO BE CONFIRMED]",
  effectiveDate: "[EFFECTIVE DATE — SET BEFORE PUBLICATION]",
  appStoreUrl: "",
};
export function Hero({ kicker, title, description }) {
  return (
    <section className="page-hero">
      <div className="container-wide">
        <p className="page-kicker">{kicker}</p>
        <h1 className="page-heading">{title}</h1>
        <p className="page-lead">{description}</p>
      </div>
    </section>
  );
}
export function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function LegalLayout({ kicker, title, description, sections, children }) {
  return (
    <>
      <Hero kicker={kicker} title={title} description={description} />
      <div className="container-wide legal-wrap">
        <aside className="legal-nav">
          <div className="font-bold text-forest mb-3">On this page</div>
          {sections.map((s) => (
            <a href={"#" + s.id} key={s.id}>
              {s.title}
            </a>
          ))}
          <div className="border-t border-[#dfd8c4] mt-4 pt-5 text-xs leading-6 text-[#7c806d]">
            Effective date: {COMPANY.effectiveDate}
          </div>
        </aside>
        <article className="legal-article min-w-0">
          <p className="notice-line mb-12">{legalNotice}</p>
          {children}
          <p className="text-sm text-[#728176]">
            For questions, visit{" "}
            <Link to="/contact-us" className="font-bold underline">
              Contact Us
            </Link>
            .
          </p>
        </article>
      </div>
    </>
  );
}
