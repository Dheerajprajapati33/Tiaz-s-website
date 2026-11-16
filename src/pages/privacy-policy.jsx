import React from "react";
import { Link } from "../site-router";
import { LegalLayout, Section, COMPANY } from "../components/page-layout";

const privacy = [
  ["scope", "Scope and controller"],
  ["collection", "Information we collect"],
  ["uses", "How information is used"],
  ["sharing", "Sharing and service providers"],
  ["security", "Security and storage"],
  ["retention", "Retention and deletion"],
  ["rights", "Your choices and rights"],
  ["children", "Children and third-party links"],
  ["changes", "Updates and grievances"],
].map(([id, title]) => ({ id, title }));
export function Privacy() {
  return (
    <LegalLayout
      kicker="Your data matters"
      title="Privacy Policy"
      description="How personal, account, payment and identity information may be processed when you use Tia'z services."
      sections={privacy}
    >
      <Section id="scope" title="1. Scope and controller">
        <p>
          This draft addresses the Tia'z website and mobile app. The identity of
          the legally responsible data fiduciary/controller, its registered
          address and its official grievance contact must be confirmed before
          publication.
        </p>
        <p>
          Legal entity: {COMPANY.legalName}. Effective date:{" "}
          {COMPANY.effectiveDate}.
        </p>
      </Section>
      <Section id="collection" title="2. Information we may collect">
        <ul>
          <li>
            Registration information such as name, phone number and email
            address.
          </li>
          <li>
            Account information, profile preferences and authentication/security
            events.
          </li>
          <li>
            Identity and KYC details such as government-document fields or
            uploads, subject to the final verification flow and lawful basis.
          </li>
          <li>
            Transaction records, portfolio activity, payment references, bank or
            payout information where needed for a requested service.
          </li>
          <li>
            Support messages, app diagnostics, device identifiers and usage data
            where the deployed app actually collects them.
          </li>
        </ul>
        <p>
          The exact production data inventory and third-party SDK behavior must
          be audited before this policy is finalized. Do not enter passwords or
          OTPs in support messages.
        </p>
      </Section>
      <Section id="uses" title="3. Purposes of processing">
        <p>
          Information may be processed to create and secure accounts, verify
          identity, conduct permitted transactions, display balances and
          activity, support payments and product fulfillment, investigate
          errors, answer support requests, comply with applicable legal
          obligations and prevent fraud.
        </p>
        <p>
          Optional marketing communications, analytics or other secondary uses
          should be disclosed with the appropriate choices and legal basis where
          required.
        </p>
      </Section>
      <Section id="sharing" title="4. Sharing and service providers">
        <p>
          Depending on the verified production architecture, necessary data may
          be shared with payment processors, KYC providers, banking/payout
          services, metal fulfillment or custody partners, hosting providers,
          delivery partners, customer support vendors and authorities when
          lawfully required.
        </p>
        <p>
          The provided APK indicates Razorpay-related payment integration, but
          an APK alone cannot confirm whether a specific data transfer is active
          in production. Provider names and data-sharing purposes must be
          checked against live contracts and infrastructure.
        </p>
        <p>
          We do not assert that data is never shared or sold without verifying
          the real operational arrangements.
        </p>
      </Section>
      <Section id="security" title="5. Security, storage and transfers">
        <p>
          Appropriate access controls, encryption, monitoring, vendor due
          diligence and incident response should be maintained for the types of
          personal data processed. No application or transmission method is
          completely risk-free.
        </p>
        <p>
          Data hosting locations, cross-border transfers and security claims
          must reflect the actual deployed systems; this draft does not claim a
          particular certification or encryption standard.
        </p>
      </Section>
      <Section id="retention" title="6. Retention and deletion">
        <p>
          Data should be kept only for as long as required for specified
          purposes, legal compliance, transactions, fraud prevention and dispute
          handling. Some financial and KYC records may be subject to mandatory
          retention obligations.
        </p>
        <p>
          Precise retention periods and account deletion workflows are to be
          inserted after operator and legal review. An account deletion request
          may not remove records that must lawfully be retained.
        </p>
      </Section>
      <Section id="rights" title="7. Your rights and choices">
        <p>
          Depending on applicable law, users may request information about
          processing, correction or updating of inaccurate information, erasure
          where permitted, grievance redressal, and withdrawal of consent where
          applicable. Withdrawal does not automatically invalidate earlier
          lawful processing.
        </p>
        <p>
          Requests should be sent through the verified support or grievance
          channel, subject to identity confirmation to protect the account.
        </p>
      </Section>
      <Section id="children" title="8. Children and other websites">
        <p>
          Eligibility for accounts and precious-metal transactions should be
          defined according to applicable law. If the Services are not intended
          for minors, the operator should implement age restrictions and
          necessary controls.
        </p>
        <p>
          Links to third-party websites or services are governed by their own
          privacy notices.
        </p>
      </Section>
      <Section id="changes" title="9. Updates and grievances">
        <p>
          Material updates should be dated and communicated as required by law.
          Current privacy contact: {COMPANY.grievanceContact}.
        </p>
        <p>
          See our{" "}
          <Link to="/contact-us" className="underline">
            Contact Us
          </Link>{" "}
          page for the correct channel once published.
        </p>
      </Section>
    </LegalLayout>
  );
}
