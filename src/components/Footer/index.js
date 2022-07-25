import { Link } from 'react-router-dom';

import logo from 'src/assets/images/elfe.png';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer_link">
        <div className="footer_link_container">
          <p className="footer_link_text">A propos</p>
          <img className="footer_link_image" src={logo} alt="" />
        </div>
      </Link>
      <Link to="/" className="footer_link">
        <div className="footer_link_container">
          <p className="footer_link_text">Contact</p>
          <img className="footer_link_image" src={logo} alt="" />
        </div>
      </Link>
      <Link to="/" className="footer_link">
        <div className="footer_link_container">
          <p className="footer_link_text">Confidentialité</p>
          <img className="footer_link_image" src={logo} alt="" />
        </div>
      </Link>
    </footer>
  );
}
