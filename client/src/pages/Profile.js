import {connect} from 'react-redux'
import React, {useEffect, useState} from 'react'
import '../style/images/css/profile.css'
import dpMilo2 from '../style/images/dpMilo2.jpg'


function Profile(props){

    const [pets, setPets] = useState([])


    useEffect(() => {
        const customer_id = localStorage.getItem('customer_id')
        fetch(`http://localhost:8080/customers/${customer_id}/pets`)
        .then(response => response.json())
        .then(results => {
            setPets(results)
        })
    },[])

    const petItems = pets.map(pet =>{
        return <li>{pet.pet_name}
                </li>
    })

    useEffect(() => {
        console.log(props)
    })


    return (
        <div className = "userProfile">
            <h1>WELCOME, {localStorage.getItem("user_name")} to your page!</h1>
            <div className ='userPets'>
                <h2>Pets</h2>
                <img className = 'profileimg' src = {dpMilo2} alt=''/>
                <ul className = 'userPets'>
                   {petItems}
                </ul>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        ON_LOGIN: state.user_name
    }
}

export default connect(mapStateToProps)(Profile);