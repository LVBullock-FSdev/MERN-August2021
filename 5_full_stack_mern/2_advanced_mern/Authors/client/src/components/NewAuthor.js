import React, { useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const NewAuthor = (props) =>{
    const [ errors, setErrors ] = useState({});
    const [ newAuthor, setNewAuthor] = useState ({

        //helps get rid of the uncontrolled input
        //allows us to set the type ahead of time to prevent bugs
        name: ""
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors',
        //request body that the back-end is asking for in the controller
        newAuthor
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
        <div>
            <Link to="/authors">Home</Link>
            <p>Add a new Author:</p>
            <Form 
            submitHandler = { newSubmitHandler }
            buttonText="Submit"
            author = { newAuthor }
            setAuthor = { setNewAuthor }
            errors = { errors }
            />
        </div>
    )
}

export default NewAuthor;