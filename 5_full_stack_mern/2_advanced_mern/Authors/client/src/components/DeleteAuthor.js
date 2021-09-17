import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteAuthor = (props) =>{

    const {id, authorList, setAuthorList} = props;

    //filter method
    const deleteFilter = (id) => {
        let newList = authorList.filter((author) => 
        author._id !== id);
        setAuthorList(newList);
    }


    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) =>{
            console.log(res.data); 
            //filter method
            if(authorList){
                deleteFilter(id);   
            }
            else{
                navigate('/');
            }
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <button id="delete" onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default DeleteAuthor;