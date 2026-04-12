import "./Footer.css";
import FacebookIcon from "../../public/icons/facebook.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import LinkedInIcon from "../../public/icons/LinkedinbyPixelIconsonIconScout.svg";
import TwitterIcon from "../../public/icons/twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="section-padding">
        <div className="links">
          <div className="links-div">
            <h4>For Business</h4>
            <a href="/#">
              <p>Employer</p>
            </a>
            <a href="/#">
              <p>Partnerships</p>
            </a>
            <a href="/#">
              <p>Sponsorships</p>
            </a>
          </div>
          <div className="links-div">
            <h4>Opportunities</h4>
            <a href="/#">
              <p>Work with us</p>
            </a>
            <a href="/#">
              <p>Hundred</p>
            </a>
            <a href="/#">
              <p>Bean bag</p>
            </a>
          </div>
          <div className="links-div">
            <h4>Partners</h4>
            <a href="/#">
              <p>Idiots</p>
            </a>
            <a href="/#">
              <p>Monkeys</p>
            </a>
            <a href="/#">
              <p>Baboons</p>
            </a>
          </div>
          <div className="links-div">
            <h4>Company</h4>
            <a href="/#">
              <p>About</p>
            </a>
            <a href="/#">
              <p>Press</p>
            </a>
            <a href="/#">
              <p>Careers</p>
            </a>
          </div>
          <div className="links-div">
            <h4>Coming soon on</h4>
            <div className="social-media-icons">
              <p>
                <img src={FacebookIcon} alt="Facebook" />
              </p>
              <p>
                <img src={InstagramIcon} alt="Instagram" />
              </p>
              <p>
                <img src={LinkedInIcon} alt="LinkedIn" />
              </p>
              <p>
                <img src={TwitterIcon} alt="Twitter" />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="below">
          <div className="copyright">
            <p>
              © {new Date().getFullYear()} Clarion State Map. All rights
              reserved.
            </p>
          </div>
          <div className="below-links">
            <a href="/#">Terms and Conditions</a>
          </div>
          <div className="below-links">
            <a href="/#">Privacy Policy</a>
          </div>
          <div className="below-links">
            <a href="/#">Security</a>
          </div>
          <div className="below-links">
            <a href="/#">Cookie Declaration</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
