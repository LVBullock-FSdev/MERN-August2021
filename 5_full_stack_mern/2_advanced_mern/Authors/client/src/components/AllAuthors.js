import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
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
                
                <table className="table table-bordered" style={{border: "1px solid black", width: "30%"}} >
                    <thead>
                        <tr style={{height: "60px"}}>
                            <th style={{backgroundColor: "lightgrey", verticalAlign: "middle"}}>Author</th>    
                            <th style={{backgroundColor: "lightgrey", verticalAlign: "middle"}}>Actions Available</th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            authorList.map((author, index) => (
                                <tr key={index}>
                                    <td style={{paddingTop: "20px"}}>{author.name}</td>
                                    <td id="actions"><Link to={`/author/edit/${author._id}`}><button id="edit">Edit</button></Link>
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