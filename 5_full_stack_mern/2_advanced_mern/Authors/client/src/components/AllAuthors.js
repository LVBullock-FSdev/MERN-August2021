import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import DeleteAuthor from './DeleteAuthor';

const AllAuthors = (props) =>{

    //set state for list of all authors
    const [ authorList, setAuthorList ] = useState([]);

    //useEffect renders when the page loads and when the state changes
    //all of this in useEffect is an asynchronous operation
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) =>{
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])



    return(
        <div className="body">
                <Link to="/author/new">Add an Author</Link>
                <h2>Catalogue of Authors</h2>
                
                <table style={{textAlign: "left"}}>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center"}}>Author</th>    
                            <th style={{borderLeft: "solid 1px black", textAlign: "center"}}>Actions Available</th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            authorList.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td id="actions" style={{borderLeft: "solid 1px black"}}><Link to={`/author/edit/${author._id}`}><button id="edit">Edit</button></Link>
                                    <DeleteAuthor 
                                                authorList={authorList} 
                                                setAuthorList={setAuthorList} 
                                                id={author._id}/></td>
                                </tr>
                            ))
                        }
                        </tbody>
                </table>
        </div>
    )
}

export default AllAuthors;