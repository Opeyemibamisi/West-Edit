import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import logo from "../../West-logo.png";
const links = ["work", "services", "about", "process", "contact"];
export default function Header() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <button className="logo" onClick={() => go("top")}>
        <img src={logo} alt="West Edit logo" />
      </button>
      <nav>
        {links.map((x) => (
          <button key={x} onClick={() => go(x)}>
            {x}
          </button>
        ))}
      </nav>
      <button className="start" onClick={() => go("contact")}>
        Start a project <ArrowUpRight size={14} />
      </button>
      <button
        className="hamburger"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="drawer">
          {links.map((x) => (
            <button key={x} onClick={() => go(x)}>
              {x}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
