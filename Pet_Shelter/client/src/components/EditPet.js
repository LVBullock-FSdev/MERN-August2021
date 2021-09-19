import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';
import Header2 from './Header2';

const EditPet = (props) =>{
    const [ errors, setErrors ] = useState({});
    const [ editedPet, setEditedPet ] = useState ({

        //helps get rid of the uncontrolled input
        //allows us to set the type ahead of time to prevent bugs
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then((res)=>{
            console.log(res.data);
            setEditedPet(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [props.id]) //If I do not add props.id, will get a warning.

    const editPetHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.id}`,
        //request body that the back-end is asking for in the controller
        editedPet
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
        <div className="body">
            <Header2/>
            <h3>Edit {editedPet.name}</h3>

            <div className="container">
            <Form 
            submitHandler = { editPetHandler } 
            buttonText="Edit Pet"
            pet = { editedPet }
            setPet = { setEditedPet }
            errors = { errors }
            />
            </div>
            
        </div>
    )
}

export default EditPet;