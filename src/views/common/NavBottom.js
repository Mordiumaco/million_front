import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

class NavBottom extends Component {



    render(){
        return(
            <Fragment>
                <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                    <Link className="navbar-brand" to="#">Bottom navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#">Disabled</Link>
                        </li>
                        <li className="nav-item dropup">
                            <Link className="nav-link dropdown-toggle" to="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown10">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>             
            </Fragment>
        )
    }
}

export default NavBottom;