import { useState } from "react"

import "./PrivacyPolicyAccordion.css"

export const PrivacyPolicyAccordion = ({title, data, opened}) => {
  const [policyOpened, setPolicyOpened] = useState(opened)

  const handlePolicyToggle = () => {
    setPolicyOpened(!policyOpened)
  }
  return (
    <div>
      <p onClick={handlePolicyToggle} className="privacy-policy-accordion-title">{title} <span className="privacy-policy-accordion-toggle"><i className={`fa-solid fa-angle-${policyOpened ? "up" : "down"}`}></i></span></p>
      {policyOpened && <p className="privacy-policy-accordion-data">{data} </p>}
    </div>
  )
}