import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import { Lesson } from "./model/Lesson";
import { Product } from "./components/Product";

function App() {
  const lessons: Lesson[] = [
    {
      topics: [
        "Components",
        "Props // props",
        "Conditionals",
        "Loops",
        "State",
        "Lifecycle",
        "inputs + forms",
      ],
      content: <Lesson1 />,
      href: "/lesson-1",
    },
    {
      topics: [
        "aria (accessibility logic)",
        "OS level stuff",
        "navigation | Routing",
      ],
      content: <Lesson2 />,
      href: "/lesson-2",
    },
    {
      href: "/lesson-3",
      content: <div>TODO</div>,
      topics: [
        "api calling",
        "navigation for dynamic",
        "build a small pokedex",
        "debugger",
      ],
    },
  ];
  return (
    <Routes>
      {/* <Route path="/" element={<Layout lessons={lessons} />} /> */}
      <Route element={<Layout lessons={lessons} />}>
        <Route path="/lesson-1" element={<Lesson1 />} />
        <Route path="/lesson-2" element={<Lesson2 />} />
        {/* <Route path="/lesson-1000" element={<Lesson1000 />} /> */}
        <Route path="/products/:banana" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
