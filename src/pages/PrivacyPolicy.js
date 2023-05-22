import { PrivacyPolicyAccordion } from "../components/Policies/PrivacyPolicyAccordion"
import { PRIVACY_POLICY } from "../db/privacyPolicy"
import "../styles/PrivacyPolicy.css"

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <p className="privacy-policy-title">Privacy Policy</p>
      <hr className="privacy-policy-title-divider" />
      <p className="privacy-policy-update-date">
      Last updated: 18th May, 2023.
      </p>
      {
        PRIVACY_POLICY.map((policy, index) => 
          <PrivacyPolicyAccordion opened={index===0 ? true : false} key={index} {...policy} />  
        )
      }
      <div className="privacy-policy-contact-container">
        <p>Contact Us</p>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </div>
  )
}