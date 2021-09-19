import React from 'react';
import { Link } from '@reach/router';

const Header2 = (props) =>{

    return(
        <header>
            <h1>Pet Shelter</h1>
                <Link className="headerLink" to="/pets">back to home</Link>
        </header>
    )
}

export default Header2;