import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const EditAuthor = (props) =>{
    const [ errors, setErrors ] = useState({});
    const [ editedAuthor, setEditedAuthor ] = useState ({

        //helps get rid of the uncontrolled input
        //allows us to set the type ahead of time to prevent bugs
        name: ""
        //type number shows by default, booleans does not
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then((res)=>{
            console.log(res.data);
            setEditedAuthor(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [props.id]) //If I do not add props.id, will get a warning.

    const editAuthorHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${props.id}`,
        //request body that the back-end is asking for in the controller
        editedAuthor
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/author');
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }    

    return(
        <div className="body">
            <Link to="/authors">Home</Link>
            <h2>Edit this author</h2>
            <Form 
            submitHandler = { editAuthorHandler } 
            buttonText="Submit"
            author = { editedAuthor }
            setAuthor = { setEditedAuthor }
            errors = { errors }
            />
        </div>
    )
}

export default EditAuthor;