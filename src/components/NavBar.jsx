import { Link } from "react-router";

function NavBar() {
  return (
    <div className="flex justify-center">
      <div className="navbar pt-5 mt-3 px-0 max-w-7xl flex !flex-col md:!flex-row">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl px-0">Manoj Prabhu</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#747474]">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/manojprabhu_resume.pdf" target="_blank">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
