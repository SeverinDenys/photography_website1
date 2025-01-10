import React from "react";
import gmailIcon from "../../images/icons8-gmail.svg";
import linkedIn from "../../images/icons8-linkedin.svg";
import whatsUp from "../../images/icons8-whatsapp.svg";

export default function Footer({ footerData }) {
  console.log("footerData", footerData);
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer__container-follow">
          <h3>Write Me</h3>
          <div className="follow__icons">
            {footerData?.footer_contact_me?.gmail.trim() && (
              <a
                href={`mailto:${footerData?.footer_contact_me?.footer_email}`}
              >
                <img src={gmailIcon} alt="gmail" />
              </a>
            )}

            {footerData?.footer_contact_me?.linkedin.trim() && (
              <a
                href={`https://www.linkedin.com/in/${footerData?.footer_contact_me?.linkedin}/`}
              >
                <img src={linkedIn} alt="linkedin" />
              </a>
            )}

            {footerData?.footer_contact_me?.whatsapp.trim() && (
              <a
                href={`https://wa.me/${footerData?.footer_contact_me?.whatsapp.trim()}/?text=Welcome to my whatsapp `}
              >
                <img src={whatsUp} alt="whatsUp" />
              </a>
            )}
          </div>
        </div>
        <div className="footer__container-contact">
          <h3>Contact Me</h3>
          <div className="info">
            <div className="info__address">
              {footerData?.footer_contact_me?.footer_address?.trim() && (
                <p>{footerData.footer_contact_me.footer_address}</p>
              )}
            </div>

            <div className="info__phone">
              {footerData?.footer_contact_me?.footer_phone?.trim() && (
                <p>{footerData.footer_contact_me.footer_phone}</p>
              )}
            </div>

            <div className="info__email">
              {footerData?.footer_contact_me?.footer_email?.trim() && (
                <p>{footerData.footer_contact_me.footer_email}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
