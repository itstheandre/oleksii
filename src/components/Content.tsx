import { ReactNode } from "react";

interface ContentProps {
  topics: string[];
  content: ReactNode;
}

function Content({ topics, content }: ContentProps) {
  return (
    <div>
      <h2>Lesson topics:</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {topic}
          </li>
        ))}
      </ul>
      {content}
    </div>
  );
};

export default Content;
