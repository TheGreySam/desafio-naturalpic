import "../assets/css/galeria.css";
import { useContext } from "react";
import FotosContext from "./../context";
import Heart from "./Heart";

export default function Home() {
  const { data } = useContext(FotosContext);
  
  const Corazon = Heart

  console.log(data)

  const datos = data[0];

  const photorender = datos.map((obj) => (
    <div key={obj.id} className="card foto  text-white">
      <img className="card-img" src={obj.src.portrait} alt=""></img>
      <div className="card-img-overlay">
      <div className="card-header">{ Corazon }</div>
        <h5 className="card-title">{obj.alt}</h5>
      </div>
    </div>
  ))
   
  return (
      <div className="container">
        <div> {Corazon} </div>
        <div className="galeria grid-columns-5 p-3">
      { photorender } 
    </div>
      </div>
    )
}