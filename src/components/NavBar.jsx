function NavBar() {
  return (
    <div className="navbar pt-5 mt-3 px-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl px-0">Manoj Prabhu</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-[#747474]">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
