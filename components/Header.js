const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="/images/VieFood.png" alt="" />
      </a>
      <ul className="main-menu" id="main-menu">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <span className="mb-menu-toggle" id="mb-menu-toggle">
        <i className="bx bx-menu"></i>
      </span>
    </header>
  );
};

export default Header;
