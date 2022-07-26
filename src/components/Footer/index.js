import { Link } from 'react-router-dom';

import aboutLogo from 'src/assets/images/tieffeline.png';
import contactLogo from 'src/assets/images/nain.png';
import politieLogo from 'src/assets/images/hobit.png';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer_link">
        <div className="footer_link_container">
          <p className="footer_link_text">A propos</p>
          <img className="footer_link_image" src={aboutLogo} alt="" />
        </div>
      </Link>
      <Link to="/" className="footer_link">
        <div className="footer_link_container">
          <p className="footer_link_text">Contact</p>
          <img className="footer_link_image" src={contactLogo} alt="" />
        </div>
      </Link>
      <a href="https://company.wizards.com/fr/legal/fancontentpolicy" target="_blank" className="footer_link" rel="noreferrer">
        <div className="footer_link_container">
          <p className="footer_link_text">Confidentialité</p>
          <img className="footer_link_image" src={politieLogo} alt="" />
        </div>
      </a>
    </footer>
  );
}
