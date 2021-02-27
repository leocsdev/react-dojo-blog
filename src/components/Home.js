const Home = () => {
  const handleClick = (e) => {
    // a referenced function (without args in onClick
    // like this handleClick), automatically gains an
    // event parameter (e), which is the parameter of an event obj
    console.log("I'm clicked!", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>

      {}
      <button
        onClick={
          //  Anonymous function will not invoke right away
          //  but it can also have an event parameter and passed
          // it in the handleClickAgain as a second arg
          (e) => handleClickAgain("Leo", e)
        }
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
