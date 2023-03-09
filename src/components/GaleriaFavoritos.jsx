import "../assets/css/galeria.css";
import { useContext } from "react";
import FotosContext from "../context";


export default function Home() {
  const { data } = useContext(FotosContext);
  //console.log(data)

  const datos = data[0];

  const filterphotorender = datos.filter(dato => dato.liked.includes(false)).map((filteredObj) => (
    <div key={filteredObj.id} className="card text-white m-3" >
      <img className="card-img photo" src={filteredObj.src.portrait} alt=""></img>
      <div className="card-img-overlay ">
      <div>
        
      </div>
        <h5>{filteredObj.liked}</h5>
        <h5 className="card-footer">{filteredObj.alt}</h5>
      </div>
    </div>
  ))
   
  return (
      <div className="photocontainer">
      { filterphotorender } 
    </div>
      
    )
}