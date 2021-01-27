import logo from '../images/logo-white.svg';


function Header() {
  return (
    <header className="header page__center">
      <img className="logo" src={logo} alt="Логотип Место" />
    </header>
  )
}

export default Header;
