import Child2 from "./Child2";

const Child1 = ({ name, age, mar, alertMe }) => {
  const test = "test";
  return (
    <div>
      <h1>This is from Comp Child 1</h1>
      <h1>Hello from {name}</h1>
      <h2>My age is {age}</h2>
      <h3>{mar ? <p>Hello</p> : <p>Bye</p>}</h3>
      {/* {alertMe()} */}
      {/* <Child2 test={test} /> */}
      <img src="./logo512.png" alt="" />
    </div>
  );
};

export default Child1;
