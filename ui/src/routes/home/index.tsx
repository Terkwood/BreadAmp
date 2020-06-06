import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import "98.css";


const HOST = "http://192.168.1.100:3030";

const post = async (command: string) =>
  fetch(`${HOST}/${command}`, {
    method: "POST",
    mode: "no-cors",
  });

const Home: FunctionalComponent = () => {
  return (
    <div>
      <h1>Home 🍞</h1>
      <p>Welcome to BreadAmp. 🍞</p>
    </div>
  );
};

export default Home;
