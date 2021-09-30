import { useState } from "react";
import {connect} from 'react-redux';

function AddPet() {
    const [pet, setPet] = useState({
        pet_name:'',
        pet_breed:'',
        pet_gender:'',
        pet_fixed:'',
        pet_medical:'',
        pet_weight:'',
        pet_age:'',
        customer_id:localStorage.getItem('customer_id')
    })

    const [msg, setMessage] = useState ()


    const handleOnChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }

    const addPet = () => {
        fetch('http://localhost:8080/add-pet', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(pet)
        }).then((response) =>{
            console.log(response)
            if(response.ok) {
                setMessage("Your Pet has been added")
            }else{
                setMessage("Your pet could not be added at this time, try again later.")
            }
        })
    }


    return(
        <div className='addPet'>
            <h3>Add a Pet</h3>
                <label>Pet Name</label>
                    <input name = 'pet_name' type = "text" onChange={handleOnChange}/>
                <label>Pet Breed</label>
                    <input name = 'pet_breed' type = "text" onChange={handleOnChange}/>
                <label>Pet Gender</label>
                <select name = 'pet_gender' onChange={handleOnChange}>
                    <option value = 'female'>FEMALE</option>
                    <option value = 'male'>MALE</option>
                </select>
                <label>Is your pet fixed?</label>
                <select name = 'pet_fixed' onChange={handleOnChange}>
                    <option value = 'true'>YES</option>
                    <option value = 'false'>NO</option>
                </select>
                <label>Pet Medical Information</label>
                    <input name = 'pet_medical' type = "text" onChange={handleOnChange}/>
                <label>Pet Weight</label>
                    <input name = 'pet_weight' type = "text" onChange={handleOnChange}/>
                <label>Pet Age</label>
                    <input name = 'pet_age' type = "text" onChange={handleOnChange}/>
                <button onClick = {addPet}>ADD PET</button>
                {msg ? <p>{msg}</p> :''}
                
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (user) => dispatch ({type:'ON_LOGIN', payload: user })
    }
}

export default connect(null, mapDispatchToProps)(AddPet) ;