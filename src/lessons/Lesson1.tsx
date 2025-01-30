import { ReactNode, useEffect, useState } from "react";

// Components
// Props // props
// Conditionals
// Loops
// State
// Lifecycle
// inputs + forms

// const variable = booleanResponse ? <SomeComponent /> : <AnotherElseComponent />;

function AgeDrinkingComponent({ age }: { age: number }) {
  if (age < 18) {
    return <div>You cannot drink</div>;
  }

  if (age > 80) {
    return <div>Youre too old to care</div>;
  }

  return <div>Fell free to drink</div>;
}

function Lesson1() {
  const [age, setAge] = useState(16);
  const [booleanVar, setBooleanVar] = useState(false);

  const listOfHobbies = [
    "Salsa",
    "Running",
    "Biking",
    "Swimming",
    "Nah its fine",
  ];

  // Runs when component gets:;
  // Added to the DOM
  // When component updates

  useEffect(() => {
    console.log("Added or updated");
  }, []);

  useEffect(() => {
    console.log("Age has been created or updated");
  }, [age]);

  // const arrOfComponents = [];

  // for (let i = 0; i < listOfHobbies.length; ++i) {
  //   arrOfComponents.push(<Hobby hobby={listOfHobbies[i]} />);
  // }

  // const anotherListOfComponents = listOfHobbies.map((hobby) => {
  //   return <Hobby hobby={hobby} />;
  // });

  return (
    <Oleksii name="Oleksii" dancesSalsa={false}>
      <button
        onClick={() => {
          setAge((currAge) => currAge + 1);
          // setAge(age + 1);
        }}
      >
        Add Year
      </button>
      <button
        onClick={() => {
          setBooleanVar((prevBool) => !prevBool);
          // setBooleanVar(!booleanVar);
        }}
      >
        Toggles booleanVar
      </button>
      <div>Hello Oleksii</div>
      <ANewComponent />
      <WrapperComponents />
      {booleanVar ? <SomeComponent /> : <AnotherElseComponent />}
      <AgeDrinkingComponent age={age} />
      {/* {age < 18 ? (
        <div>You cannot drink</div>
      ) : age > 80 ? (
        <div>Youre too old to care</div>
      ) : (
        <div>Drink</div>
      )} */}

      {/* if (true) {<SomeComponent />} else {<AnotherElseComponent />} */}
      {/* for (let i =0; i {"<"} 10; i++) {console.log("printing")} */}
      {/* {anotherListOfComponents} */}
      {listOfHobbies.map((hobby) => {
        return <Hobby hobby={hobby} />;
      })}
    </Oleksii>
  );
}

function Hobby(props: { hobby: string }) {
  return <div style={{ color: "red" }}>{props.hobby}</div>;
}

function SomeComponent() {
  useEffect(() => {
    return () => {
      console.log("Removed from DOM");
    };
  });
  return <div>Some</div>;
}

function AnotherElseComponent() {
  return <div>Else</div>;
}

type OleksiiProps = {
  dancesSalsa: boolean;
  name: string;
  children: ReactNode;
};

function Oleksii(props: OleksiiProps) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>{String(props.dancesSalsa)}</h2>
      {props.children}
    </div>
  );
}

function ANewComponent() {
  return <div>Some Jsx</div>;
}

function WrapperComponents() {
  return <div>{1}</div>;
}

export default Lesson1;

export { Lesson1 };
