import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
        <Link to={"/"} ><div className="header">موسیقار</div></Link>
        );
    }
}

export default Header;