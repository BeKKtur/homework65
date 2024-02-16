import {NavLink} from "react-router-dom";

const AppBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <div className="container-fluid">
                    <h2 className="navbar-brand">My Blog</h2>
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/class" className="nav-link">Class</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/play" className="nav-link">Play</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/admin" className="nav-link">Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default AppBar;