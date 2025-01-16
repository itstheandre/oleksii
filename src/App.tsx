import Layout from "./components/Layout";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import { Lesson } from "./model/Lesson";

function App() {
  const lessons: Lesson[] = [
    {
      topics: ["Components", "Props // props", "Conditionals", "Loops", "State", "Lifecycle", "inputs + forms",],
      content: <Lesson1 />
    },
    {
      topics: ["aria (accessibility logic)", "OS level stuff", "navigation | Routing"],
      content: <Lesson2 />
    }
  ];
  return <Layout lessons={lessons} />;
}

export default App;
