import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return ( 
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <nav className="navbar-brand">POKEDEX</nav>
                <Link to ="/" style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
            </div>
        </nav>
            <section>
              <Outlet/>
            </section>
    </div>
    );
      
}