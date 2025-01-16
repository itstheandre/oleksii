import { useState } from "react";

interface SidebarProps {
  menuItems: string[];
  activePage: number;
  setActivePage: (page: number) => void;
}

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
            key={item}
            onClick={() => setActivePage(index)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              background: activePage === index ? "#444" : "none",
            }}
          >
            {collapsed ? item.split(" ")[1] : item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
