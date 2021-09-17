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
                <h2>We have quotes by:</h2>
                
                <table style={{textAlign: "left"}}>
                    <thead>
                        <tr>
                            <th>Author</th>    
                            <th>Actions Available</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            authorList.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td><Link to={`/author/edit/${author._id}`}><button id="edit">Edit</button></Link></td>
                                    <td>
                                        <DeleteAuthor 
                                                authorList={authorList} 
                                                setAuthorList={setAuthorList} 
                                                id={author._id}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                </table>
        </div>
    )
}

export default AllAuthors;