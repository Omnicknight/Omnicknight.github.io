import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="container header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Variables">Variables</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;