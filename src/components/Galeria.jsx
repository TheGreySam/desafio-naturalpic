import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "./../context";
//import Heart from "./Heart";

export default function Home() {
  const { data, setSearch } = useContext(Context);
  const inputSearch = (e) => {
    setSearch(e.target.value)
}
//console.log(stararray)
const starcard = Object.values(stararray).filter((e) => {
    return (
        search.toLowerCase() === '' ? e : e.name.toLowerCase().includes(search)
    )
}).map((e, i) =>
    <div className="card border-primary mb-3 cardsize m-2 bg-dark" key={i}>
        <img src={e.image} className="card-img imgcard" alt="..."></img>

        <div id="accordion">
            <div class="card-img-overlay bg-semi d-flex align-items-end justify-content-center">
                <div class="card-header" id="headingOne">
                    <h5 className="card-title">{e.name}</h5>
                        <button type="button" class="btn btn-outline-info text-white" data-bs-toggle="collapse" data-bs-target={"#collapse"+e.id.toString()} aria-expanded="false" aria-controls={e.id.toString()}>
                        Expandir Información
                        </button>
                </div>
            </div>
            <div id={"collapse"+e.id.toString()} class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div class="card-body">
                    <table class="table text-light mb-4">
                        <tbody>
                            <tr>
                                <th scope="row">Nacimiento:</th>
                                <td >{e.born}</td>
                            </tr>
                            <tr>
                                <th scope="row">Planeta:</th>
                                <td >{e.homeworld}</td>
                            </tr>
                            <tr>
                                <th scope="row">Especie:</th>
                                <td >{e.species}</td>
                            </tr>
                            <tr>
                                <th scope="row">Afiliación:</th>
                                <td>
                                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-info'>{e.affiliations}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Maestro:</th>
                                <td>
                                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-info'>{e.masters}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Aprendiz:</th>
                                <td>
                                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-info'>{e.apprentices}</li>
                                    </ul>
                                </td>
                            </tr>
                            <hr />
                            <hr />
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>)

  return (
    <div className="galeria grid-columns-5 p-3">
      
    </div>
  );
}
