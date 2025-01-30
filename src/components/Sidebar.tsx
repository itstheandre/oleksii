import { useState } from "react";
import { Link } from "react-router";

interface SidebarProps {
  menuItems: Array<{ text: string; href: string }>;
  activePage: number;
  setActivePage: (page: number) => void;
}

const links = [
  {
    link: "/products/knapper-staande-spiegel-wit-00396242",
    name: "Knapper",
  },
  {
    link: "/products/vollerslev-vloerkleed-hoogpolig-wit-30492572",
    name: "Vollerslev",
  },
];

function Sidebar({ menuItems, activePage, setActivePage }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.2s",
      }}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {collapsed ? ">" : "<"}
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item, index) => (
          <li
            key={item.href}
            onClick={() => setActivePage(index)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              background: activePage === index ? "#444" : "none",
            }}
          >
            <Link to={item.href}>
              {collapsed ? item.text.split(" ")[1] : item.text}
            </Link>
          </li>
        ))}
        {links.map((item) => {
          return (
            <li
              key={item.link}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
