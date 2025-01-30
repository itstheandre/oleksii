interface ContentProps {
  topics: string[];
  // content: ReactNode;
}

// Interface Merging

function Content({ topics }: ContentProps) {
  return (
    <div>
      <h2>Lesson topics:</h2>
      <ul
        className="content-list"
        style={{ listStyleType: "disc", paddingLeft: "20px" }}
      >
        {topics.map((topic, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {topic}
          </li>
        ))}
      </ul>
      {/* {content} */}
    </div>
  );
}

export default Content;
