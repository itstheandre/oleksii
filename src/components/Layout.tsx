import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Lesson } from "../model/Lesson";

interface LayoutProps {
  lessons: Lesson[]
}

function Layout({lessons}: LayoutProps) {
  const [activePage, setActivePage] = useState<number>(0);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar menuItems={lessons.map((_item, index) => { return `Lesson ${index + 1}`;})} activePage={activePage} setActivePage={setActivePage} />
      <div style={{ flex: 1, padding: "20px" }}>
        <Content topics={lessons[activePage].topics} content={lessons[activePage].content} />
      </div>
    </div>
  );
};

export default Layout;