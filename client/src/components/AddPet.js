import { useState} from "react";
import {connect} from 'react-redux';
import dpPepper from '../style/images/dpPepper.jpg'
import '../style/images/css/addpet.css'
import {Card, Button} from 'react-bootstrap'

function AddPet(props) {
    const [pet, setPet] = useState({
        pet_name:'',
        pet_breed:'',
        pet_gender:'',
        pet_fixed:false,
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
                props.history.push('/profile')
            }else{
                setMessage("Your pet could not be added at this time, try again later.")
            }
        })
    }

    


    return(
        <div className='addPet'>
            <h3>Fill out the form below to add a pet tp your profile!</h3>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {dpPepper}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <label>Pet Name</label>
                    <input name = 'pet_name' type = "text" onChange={handleOnChange}/>
                <label>Pet Breed</label>
                    <input name = 'pet_breed' type = "text" onChange={handleOnChange}/>
                <label>Pet Gender</label>
                <br></br>
                <select name = 'pet_gender' onChange={handleOnChange}>
                    <option value = 'female'>FEMALE</option>
                    <option value = 'male'>MALE</option>
                </select>
                <br></br>
                <label>Is your pet fixed?</label>
                <br></br>
                <select name = 'pet_fixed' onChange={handleOnChange}>
                    <option value = 'true'>YES</option>
                    <option value = 'false'>NO</option>
                </select>
                <br></br>
                <label>Pet Medical Information</label>
                    <input name = 'pet_medical' type = "text" onChange={handleOnChange}/>
                    <br></br>
                <label>Pet Weight</label>
                    <input name = 'pet_weight' type = "text" onChange={handleOnChange}/>
                    <br></br>
                <label>Pet Age</label>
                <br></br>
                    <input name = 'pet_age' type = "text" onChange={handleOnChange}/>
                    </Card.Text>
                    <Button onClick = {addPet} variant="primary">Add Pet</Button>
                    {msg ? <p>{msg}</p> :''}
                </Card.Body>
            </Card>
                
                
                
                
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (user) => dispatch ({type:'ON_LOGIN', payload: user })
    }
}

// const mapStateToProps 

export default connect(null, mapDispatchToProps)(AddPet) ;