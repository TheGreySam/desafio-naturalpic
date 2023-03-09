import "../assets/css/galeria.css";
import { useState, useContext } from "react";
import FotosContext from "./../context";
//import Heart from "./Heart";
import CorazonBtn from "./CorazonBtn"

export default function Home() {
  const { data } = useContext(FotosContext);
  const [like, setLike] = useState(false)


  console.log(data)

  const datos = data[0];

  const photorender = datos.map((obj) => (
    <div key={obj.id} className="card text-white m-3" >
      <img className="card-img photo" src={obj.src.portrait} alt=""></img>
      <div className="card-img-overlay ">
      <div>
        
       
      {/*   <h2 onClick={() => setLike((prevState) => !prevState)}>
          Like: {like ? "heart.svg" : "heart-filled.svg"}
        </h2> */}
        
        <CorazonBtn />
      </div>
        
        <h5 className="card-footer">{obj.alt}</h5>
      </div>
    </div>
  ))
   
  return (
      <div className="photocontainer">
      { photorender } 
    </div>
      
    )
}