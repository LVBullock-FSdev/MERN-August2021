import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const DeletePet = (props) =>{

    const {id, petList, setPetList} = props; //adding onePet does not work for the value in the delete button?????


    //filter method
    const deleteFilter = (id) => {
        let newList = petList.filter((pet) => 
        pet._id !== id);
        setPetList(newList);
    }

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res) =>{
            console.log(res.data); 
            //filter method
            if(petList){
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
            <button 
                style={{backgroundColor: "red", color: "white", position: "fixed", right: "202px", top: "100px"}} 
                onClick={deleteHandler}>Adopt Me  {/* ${onePet.name} ????????*/}
            </button>
        </div>
    )
}

export default DeletePet;