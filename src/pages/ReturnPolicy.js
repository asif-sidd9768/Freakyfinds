import { PrivacyPolicyAccordion } from "../components/Policies/PrivacyPolicyAccordion"
import { PRIVACY_POLICY } from "../db/privacyPolicy"
import { RETURN_POLICY } from "../db/returnPolicy"
import "../styles/PrivacyPolicy.css"

export const ReturnPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <p className="privacy-policy-title">Return and Refund Policy</p>
      <hr className="privacy-policy-title-divider" />
      <p className="privacy-policy-update-date">
      Last updated: 18th May, 2023.
      </p>
      {
        RETURN_POLICY.map((policy, index) => 
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