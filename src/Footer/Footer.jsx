import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icon">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div>
          {!isMobile ? (
            <div className="footer_data">
              <div>
                <ul>
                  <li>Audio Description</li>
                  <li>Investor Relations</li>
                  <li>Legal Notice</li>
                  <li className="service_code">Service Code </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Help Center</li>
                  <li>Jobs</li>
                  <li>Cookie Preferences</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Gift Cards</li>
                  <li>Terms of Use</li>
                  <li>Corporate Information</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Media Center</li>
                  <li>Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          ) : (
            <section className="footer_data">
              <div>
                <div>
                  <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                    <li>Service Code</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
          <div className="footer_copyright">
            {isMobile && (
              <div className="service_code">
                <p>Service Code</p>
              </div>
            )}
            <div className="copy_write">
              <p>© 1997-{currentYear} Netflix, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
