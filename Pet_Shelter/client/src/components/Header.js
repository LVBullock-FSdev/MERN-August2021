import React from 'react';
import { Link } from '@reach/router';

const Header = (props) =>{

    return(
        <header>
            <h1>Pet Shelter</h1>
                <Link className="headerLink" to="/pet/new">add a pet to the shelter</Link>
        </header>
    )
}

export default Header;