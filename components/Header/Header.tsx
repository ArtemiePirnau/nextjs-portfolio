import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
export default function Header() {
  return (
    <header className="header ">
      <div className="header__inner w-full">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
}
