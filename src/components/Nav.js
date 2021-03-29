import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div id="nav-div">
            <h1 ><Link id="sugiwon" to="/">Sugiwon</Link></h1>
            {/* <br />
            <br /> */}
            <div id="nav-tabs">

                <Link className="nav-item" to="/">Home</Link>
                {/* <Link className="nav-item" to="/contact">Contact</Link> */}
                {/* <a className="nav-item" href="https://fanlink.to/sugiwon" target="_blank" rel="noreferrer">Music</a> */}
                {/* <Link className="nav-item" to="/store">Store</Link> */}
                <Link className="nav-item" to="/discography">Music</Link>
            </div>
        </div>
    )
}

export default Nav;