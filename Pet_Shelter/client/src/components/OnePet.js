import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeletePet from './DeletePet';
import Header2 from './Header2';

const OnePet = (props) =>{
    const [onePet, setOnePet] = useState({});

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setOnePet(res.data);
        })
        .catch((err) => console.log(err))
    }, [props.id]) //if I do not add props.id, will throw a warning.


    return(
        <div>
            <Header2/>
            <h3>Details about: {onePet.name}</h3>
            <DeletePet id={onePet._id}/><br/>
            <div className="container">
                <table>
                    <tr style={{paddingTop: "20px"}}></tr>
                        <td className="columnWidth"><strong>Pet Type:</strong></td>
                        <td>{onePet.type}</td>
                    <tr className="rowHeight"></tr>
                        <td className="columnWidth"><strong>Pet Description:</strong></td>
                        <td>{onePet.description}</td>              
                    <tr className="rowHeight"></tr>
                        <td className="columnWidth"><strong>Skills:</strong></td>
                        <td>{onePet.skill1}</td>
                    <tr></tr>
                        <td className="columnWidth"></td>
                        <td>{onePet.skill2}</td>
                    <tr></tr>
                        <td className="columnWidth"></td>
                        <td>{onePet.skill3}</td>
                </table>
            </div>
        </div>
    )
}

export default OnePet;