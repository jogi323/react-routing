import React from 'react';
import {Link} from 'react-router-dom';

class Add extends React.Component {
    render() { 
        return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/add">Todo</Link>
                    </li>
                    <li>
                        <Link to="/add/todo2">Todo</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
 
export default Add;