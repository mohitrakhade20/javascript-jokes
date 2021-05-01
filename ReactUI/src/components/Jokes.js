import Cards from "./Cards";
import "../assets/Jokes.css";
import Nav from "./Nav";
import NavBar from "./NavBar";


function Jokes() {
  return (
    <div>
      <h1>JavaScript jokes</h1>
      <NavBar />
      <Nav />
      <Cards />
    </div>
  );
}
export default Jokes;
