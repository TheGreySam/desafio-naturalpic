import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            
         

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/Favoritos" className="text-white ms-3 text-decoration-none">
                    Favoritos
                    </Link>

                </ul>

            </div>
        </nav>

    )
}