import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag:''
        };
    }


    render() {
        return (
            <header className="header">
                <NavLink to='/' className={` ${location.pathname==='/'?'link current':'link'}`}>Game</NavLink>
                <NavLink to='/ranking' className={` ${location.pathname==='/ranking'?'link current':'link'}`}>Ranking</NavLink>
            </header>
        );
    }
}
export default Header;
