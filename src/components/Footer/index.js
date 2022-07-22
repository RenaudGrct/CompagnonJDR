import { Link } from 'react-router-dom';

import logo from 'src/assets/images/elfe.png';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_div">

        <Link to="/" className="footer_link">
          <div>
            <p className="footer_link_text">A propos</p>
          </div>
          <div>
            <img className="footer_link_image" src={logo} alt="" />
          </div>
        </Link>
        <Link to="/" className="footer_link">
          <div>
            <p className="footer_link_text">Contact</p>
          </div>
          <div>
            <img className="footer_link_image" src={logo} alt="" />
          </div>
        </Link>
        <Link to="/" className="footer_link">
          <div>
            <p className="footer_link_text">Confidentialité</p>
          </div>
          <div>
            <img className="footer_link_image" src={logo} alt="" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
