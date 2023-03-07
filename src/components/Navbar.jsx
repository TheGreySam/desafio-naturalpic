import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            
         

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    
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