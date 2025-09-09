import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer text">
      <div className="container">
        <div className="footer__inner">
          <Link href="/" className="mb-10">
            <Image
              src="https://github.com/ArtemiePirnau/nextlify-portfolio/blob/master/public/logo.png?raw=true"
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
          <nav className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="">
                  Linkedin
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__link"
                  href="https://github.com/ArtemiePirnau"
                >
                  Github
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__link"
                  href="https://www.instagram.com/artemie.js/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <p className="footer__copyright">Pîrnău Artemie 2022</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
