import { render } from "@testing-library/react";
import react from "react";
import Cards from "./Cards";
import "../assets/Jokes.css";
import Nav from "./Nav";

function Jokes() {
  return (
    <div>
      <h1>JavaScript jokes</h1>
      <Nav />
      <Cards />
    </div>
  );
}
export default Jokes;
