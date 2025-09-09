import Link from "next/link";
import ThemeSwitch from "../ThemeSwitcher";
import Image from "next/image";
export default function HeaderTop() {
  return (
    <div className="header__top">
      <Link className="logo" href="/">
        <Image
          className="logo__img"
          priority
          src="https://github.com/ArtemiePirnau/nextlify-portfolio/blob/master/public/logo.png?raw=true"
          alt="logo"
          width={70}
          height={70}
        />
      </Link>
      <Link className="ml-auto mr-24 header__top-contacts" href="/contacts">
        Contacts
      </Link>
      <ThemeSwitch />
    </div>
  );
}
