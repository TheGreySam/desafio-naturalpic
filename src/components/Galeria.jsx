import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "./../context";
//import Heart from "./Heart";

export default function Home() {
  const value = useContext(Context);
  //console.log(value)
  //const datalist = data.map(photos => <li> {photos} </li>)
  

  return (
    <Context.Consumer>
      <div className="galeria grid-columns-5 p-3">
      <h1> {value} </h1>
    </div>
    </Context.Consumer>
    
  );
}
