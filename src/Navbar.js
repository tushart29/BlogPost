import { Link } from 'react-router-dom'
// type sfc to create a component. arrow function is the same thing as the bracket function
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The General-Blog</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"> New Blog </Link>
            </div>

        </nav>
    );
}

export default Navbar;