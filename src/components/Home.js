const Home = () => {
  // name var is not reactive
  let name = "Mario";

  const handleClick = () => {
    // name value changes to Luigi when the button below is clicked
    name = "Luigi";
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      {/* name will not update to Luigi, it stays with Mario */}
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
