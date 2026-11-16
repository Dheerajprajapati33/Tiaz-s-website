import React, { useState } from "react";
import { Link } from "../site-router";
import { Hero, COMPANY } from "../components/page-layout";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const update = (e) =>
    setFields((v) => ({ ...v, [e.target.name]: e.target.value }));
  const valid = Boolean(COMPANY.supportEmail);
  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    const subj = encodeURIComponent(fields.subject || "Tiaz website enquiry");
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
    );
    window.location.href = `mailto:${COMPANY.supportEmail}?subject=${subj}&body=${body}`;
  };
  return (
    <>
      <Hero
        kicker="We're here to help"
        title="Contact Us"
        description="Have a question about the Tia'z app, account verification, payments, metal services or an existing transaction? Find the right support channel here."
      />
      <section className="section">
        <div className="container-wide grid lg:grid-cols-[.8fr,1.2fr] gap-12">
          <div>
            <h2 className="font-display text-4xl text-forest">
              Let's connect.
            </h2>
            <p className="text-[#67786a] mt-5 leading-8">
              For account- or transaction-specific enquiries, use the official
              support channel shown in the live app. Please do not share OTPs,
              account passwords, full bank details or unrequested identity
              documents.
            </p>
            <div className="grid gap-4 mt-9">
              {[
                [
                  Mail,
                  "Support email",
                  COMPANY.supportEmail || "Awaiting verified support email",
                ],
                [
                  Phone,
                  "Support phone",
                  COMPANY.supportPhone || "Awaiting verified phone number",
                ],
                [MapPin, "Registered office", COMPANY.registeredAddress],
              ].map(([Icon, t, d]) => (
                <div key={t} className="info-card flex items-start gap-4">
                  <Icon size={24} className="text-[#ae8b45] shrink-0" />
                  <div>
                    <div className="font-bold text-forest">{t}</div>
                    <p className="text-sm leading-7 text-[#6c7b6f] mt-1 break-words">
                      {d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="info-card">
            <p className="page-kicker">Send an enquiry</p>
            <h2 className="font-display text-3xl text-forest mt-3">
              How can we help?
            </h2>
            <p className="notice-line mt-6 mb-7">
              The website contact form is a ready-to-connect UI. Sending is
              disabled until a verified support email or backend is configured;
              no message is currently submitted or stored.
            </p>
            <form onSubmit={submit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  ["name", "Full name", "Your full name"],
                  ["email", "Email address", "you@example.com"],
                ].map(([name, label, ph]) => (
                  <label
                    key={name}
                    className="text-sm font-semibold text-forest"
                  >
                    {label}
                    <input
                      className="contact-input mt-2"
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      value={fields[name]}
                      onChange={update}
                      placeholder={ph}
                      required
                    />
                  </label>
                ))}
              </div>
              <label className="text-sm font-semibold text-forest">
                Subject
                <input
                  className="contact-input mt-2"
                  name="subject"
                  value={fields.subject}
                  onChange={update}
                  placeholder="What is this about?"
                  required
                />
              </label>
              <label className="text-sm font-semibold text-forest">
                Message
                <textarea
                  className="contact-input mt-2 min-h-[150px] resize-y"
                  name="message"
                  value={fields.message}
                  onChange={update}
                  placeholder="Describe your question (without sensitive financial or identity details)"
                  required
                />
              </label>
              <button
                type="submit"
                className="gold-button justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!valid}
              >
                <Send size={17} />{" "}
                {valid ? "Open email to send" : "Contact form awaiting setup"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f1eee4]">
        <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-forest">
              Looking for our policies?
            </h2>
            <p className="mt-2 text-[#647568]">
              Review data handling and transaction-related terms.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/privacy-policy" className="outlined-button">
              Privacy Policy
            </Link>
            <Link to="/terms-condition" className="outlined-button">
              Terms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
