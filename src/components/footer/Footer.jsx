import React from "react";
import gmailIcon from "../../images/icons8-gmail.svg";
import linkedIn from "../../images/icons8-linkedin.svg";
import whatsUp from "../../images/icons8-whatsapp.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container-follow">
          <h3>write Me</h3>
          <div className="follow__icons">
            <img src={gmailIcon} alt="gmail" />
            <img src={linkedIn} alt="linkedin" />
            <img src={whatsUp} alt="whatsUp" />
          </div>
        </div>
        <div className="footer__container-contact">
          <h3>Contact Me</h3>
          <div className="info">
            <div className="info__address">
              <p>123 Main Street, New York, NY 10012</p>
            </div>

            <div className="info__phone">
              <p>0.000.000.0.00</p>
            </div>

            <div className="info__email">
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
