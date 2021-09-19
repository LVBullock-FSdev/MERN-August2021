import React, { useState} from 'react';
import axios from 'axios';
import {navigate } from '@reach/router';
import Form from '../components/Form';
import Header2 from './Header2';

const NewPet = (props) =>{
    const [ errors, setErrors ] = useState({});
    const [ newPet, setNewPet] = useState ({

        //helps get rid of the uncontrolled input
        //allows us to set the type ahead of time to prevent bugs
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets',
        //request body that the back-end is asking for in the controller
        newPet
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/pet');
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <Header2/>

            <h3>Know a pet needing a home?</h3>
            <Form 
            submitHandler = { newSubmitHandler }
            buttonText="Add Pet"
            pet = { newPet }
            setPet = { setNewPet }
            errors = { errors }
            />
        </div>
    )
}

export default NewPet;