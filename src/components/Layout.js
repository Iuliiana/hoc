import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/view-time">view time</a>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="/highlight">Highlight</a>*/}
                {/*</li>*/}
            </ul>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}