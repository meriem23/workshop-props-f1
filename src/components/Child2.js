import logo192 from "./logo192.png";
const Child2 = ({ test, essmi }) => {
  return (
    <div>
      <h2>This is from Comp Child 2</h2>
      <h6>This is a {test}</h6>
      <h6>This is me, {essmi}</h6>
      <img src={logo192} alt="" />
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt=""
        width="200px"
      />
    </div>
  );
};

export default Child2;
