import React from "react";
import gmailIcon from "../../images/icons8-gmail.svg";
import linkedIn from "../../images/icons8-linkedin.svg";
import whatsUp from "../../images/icons8-whatsapp.svg";

export default function Footer({ footerData }) {
  console.log(footerData);
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
              {footerData.footer_contact_me.footer_address && (
                <p>{footerData.footer_contact_me.footer_address}</p>
              )}
            </div>

            <div className="info__phone">
              {footerData.footer_contact_me.footer_phone && (
                <p>{footerData.footer_contact_me.footer_phone}</p>
              )}
            </div>

            <div className="info__email">
              {footerData.footer_contact_me.footer_email && (
                <p>{footerData.footer_contact_me.footer_email}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
