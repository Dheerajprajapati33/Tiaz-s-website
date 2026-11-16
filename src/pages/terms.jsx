import React from "react";
import { Link } from "../site-router";
import { LegalLayout, Section, COMPANY } from "../components/page-layout";

const terms = [
  ["overview", "Overview & acceptance"],
  ["eligibility", "Eligibility and accounts"],
  ["metals", "Digital gold and silver"],
  ["pricing", "Prices, taxes and charges"],
  ["payments", "Payments and settlement"],
  ["delivery", "Physical products and delivery"],
  ["refunds", "Cancellations and refunds"],
  ["responsibilities", "User responsibilities"],
  ["risks", "Risks and disclaimers"],
  ["legal", "Liability, changes and disputes"],
  ["contact", "Company details"],
].map(([id, title]) => ({ id, title }));
export function Terms() {
  return (
    <LegalLayout
      kicker="Legal information"
      title="Terms & Conditions"
      description="Understand the rules for using Tia'z digital precious-metal features, account services and related products."
      sections={terms}
    >
      <Section id="overview" title="1. Overview & acceptance">
        <p>
          These Terms & Conditions are proposed for the Tia'z Financial
          Solutions mobile application and this website (together, the
          “Services”). The Services present digital gold, digital silver,
          portfolio views, wallet-related journeys, account verification and,
          where offered, physical precious-metal products.
        </p>
        <p>
          By registering or using a service, users agree to the terms displayed
          to them at that time, including any applicable product-specific
          disclosures. Where an in-app transaction screen or partner agreement
          has additional terms, those must be reviewed before proceeding.
        </p>
      </Section>
      <Section id="eligibility" title="2. Eligibility and accounts">
        <ul>
          <li>
            Users must satisfy the applicable legal age, identity and residency
            requirements for the specific service.
          </li>
          <li>
            Registration information must be truthful, complete and kept up to
            date.
          </li>
          <li>
            Identity verification (KYC), PAN or other documents and bank
            verification may be required where applicable.
          </li>
          <li>
            Users are responsible for safeguarding their devices, credentials,
            OTPs and account access.
          </li>
          <li>
            Accounts may be restricted or suspended for suspected misuse,
            unlawful activity, verification failures or security risk, subject
            to applicable law.
          </li>
        </ul>
      </Section>
      <Section id="metals" title="3. Digital gold and silver">
        <p>
          The application may allow eligible users to place buy and sell
          requests for digital gold and silver and review holdings.
          Availability, minimum or maximum values, fulfillment provider, purity,
          custody, settlement and redemption rules depend on the product and
          partner terms shown before a transaction.
        </p>
        <p>
          Digital precious metals are not bank deposits or guaranteed-return
          products. Gold and silver holdings do not inherently earn fixed
          interest, and their market value may rise or fall.
        </p>
        <p>
          Before launch, the operator must identify the actual metal provider,
          ownership model, vault/custody arrangements and redemption rights
          wherever these apply.
        </p>
      </Section>
      <Section id="pricing" title="4. Prices, taxes and charges">
        <p>
          Quoted buy and sell prices may differ and may change with market
          conditions. Displayed transaction values may include a spread, fees or
          taxes as indicated in the checkout summary. Applicable GST and other
          statutory charges must be disclosed before payment.
        </p>
        <p>
          Illustrative prices or portfolio values displayed on promotional pages
          are not executable quotes. Users should check the final confirmed
          transaction amount within the application.
        </p>
      </Section>
      <Section id="payments" title="5. Payments, wallets and settlement">
        <p>
          Payment collection may use third-party payment gateway services,
          including the Razorpay integration identified in the provided APK. A
          gateway's acceptance of a payment request does not necessarily mean
          the precious-metal order has been completed.
        </p>
        <p>
          Failed, reversed, pending or duplicate transactions should be handled
          under the operator's verified payment and reconciliation process. Any
          wallet balances, withdrawal timelines, payout fees or bank-account
          checks must be clearly disclosed in the relevant app journey.
        </p>
      </Section>
      <Section id="delivery" title="6. Physical products and delivery">
        <p>
          Where physical coins or bars are available, product descriptions
          should specify purity, weight, making/packaging charges, delivery
          areas, expected dispatch time, shipping charges, insurance
          arrangements and any identification requirement on delivery.
        </p>
        <p>
          Delivery dates are estimates unless specifically guaranteed. The
          operator must publish the actual fulfillment and non-delivery
          escalation process before enabling orders.
        </p>
      </Section>
      <Section id="refunds" title="7. Cancellations, refunds and disputes">
        <p>
          Digital-metal orders may involve time-sensitive market prices and
          could be irreversible after execution. No blanket no-refund policy is
          asserted here: the final policy must distinguish unexecuted orders,
          failed payments, completed trades, technical errors and physical
          product returns in accordance with applicable law.
        </p>
        <p>
          For a disputed payment or product, contact the verified support
          channel with the transaction reference. Applicable refund eligibility,
          deductions and processing time must be published before launch.
        </p>
      </Section>
      <Section id="responsibilities" title="8. User responsibilities">
        <ul>
          <li>
            Do not submit inaccurate KYC information or use another person's
            identity or payment instrument without authorization.
          </li>
          <li>
            Do not exploit app defects, attempt unauthorized access or interfere
            with service operation.
          </li>
          <li>
            Review transaction confirmations, applicable taxes, metal quantities
            and fees before approving an order.
          </li>
          <li>
            Report suspected unauthorized transactions promptly using official
            support channels.
          </li>
        </ul>
      </Section>
      <Section id="risks" title="9. Market and technology risks">
        <p>
          Metal prices are volatile; historical performance cannot predict
          future results. Technology outages, payment processing delays, bank
          downtime, pricing interruptions and regulatory changes may affect
          availability. No fixed income, profit or price appreciation is
          promised.
        </p>
        <p>
          The website is informational and is not individual investment, tax or
          legal advice.
        </p>
      </Section>
      <Section
        id="legal"
        title="10. Intellectual property, liability and changes"
      >
        <p>
          Branding, application design and original website materials may be
          protected under applicable intellectual-property law. Users receive
          only the limited permissions needed to use the Services lawfully.
        </p>
        <p>
          Mandatory consumer rights cannot be excluded by these Terms. Any
          limitation of liability, governing law, jurisdiction, suspension
          procedure or amendment notice must be finalized against the verified
          contracting entity and applicable Indian law before publication.
        </p>
      </Section>
      <Section id="contact" title="11. Company and support details">
        <p>Trading name: Tia'z Financial Solutions.</p>
        <p>Legal entity: {COMPANY.legalName}</p>
        <p>Registered address: {COMPANY.registeredAddress}</p>
        <p>
          Support and complaints:{" "}
          <Link to="/contact-us" className="underline">
            Contact Us
          </Link>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
