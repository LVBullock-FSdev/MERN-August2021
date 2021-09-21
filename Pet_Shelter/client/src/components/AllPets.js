import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
// import DeletePet from './DeletePet';
import Header from './Header';

const AllPets = (props) =>{

    //set state for list of all pets
    const [ petList, setPetList ] = useState([]);

    //useEffect renders when the page loads and when the state changes
    //all of this in useEffect is an asynchronous operation
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then((res) =>{
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

    return(
        <div className="body">
            <Header/>
            <h3>These pets are looking for a good home</h3><br/>
                
            <table className="table table-bordered" style={{border: "1px solid black", borderCollapse: "collapse", width: "50%"}} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{borderLeft: "1px solid black"}}>Type</th>    
                        <th style={{borderLeft: "1px solid black"}}>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        petList.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td style={{borderLeft: "1px solid black"}}>{pet.type}</td>
                                <td style={{borderLeft: "1px solid black"}}><Link to={`/pet/${pet._id}`}>details</Link>&nbsp;|&nbsp;
                                <Link to={`/pet/edit/${pet._id}`}>edit</Link>
                                
                                </td> 
                            </tr>
                        ))
                    }
                    </tbody>
            </table>
        </div>
    )
}

export default AllPets;