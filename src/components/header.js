import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    state = {}
    render() { 
        return ( 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                </ul>
        )
    }
}
 
export default Header;