import { useState } from "react";

const Home = () => {
  // // name var is not reactive
  // let name = "Mario";

  // Utilize useState instead to become reactive
  const [name, setName] = useState("Mario");

  const handleClick = () => {
    // // name value changes to Luigi when the button below is clicked
    // name = "Luigi";
    // console.log(name);

    // Set name to Luigi once button is clicked
    setName("Luigi");
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      <p>
        {
          // // name will not update to Luigi, it stays with Mario
          // name

          // since useState is used, name will update to Luigi once button is clicked
          name
        }
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
