import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import dpcutie from '../style/images/dpcutie.jpg'
import '../style/images/css/register.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register(props) {
    const [user, setUser] = useState({
        owner_first_name: '',
        owner_last_name: '',
        street_address: '',
        city: '',
        zipcode: '',
        email: '',
        mobile_phone: '',
        user_name: '',
        password: ''
    })
    const [errormsg, setErrormsg] = useState()
 
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const signUp = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => {
            console.log('response', response);
            if (!response.ok) {
                setErrormsg("Username already exists!")
            } else {
                console.log('registration successful!')
                props.history.push('/login')
                setErrormsg()
            }
        });
    };



    return (
        <div className="register">
            <h1>Welcome to Deluxe Pawz!</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {dpcutie} />
                <Card.Body>
                    <Card.Title>Sign Up Here!</Card.Title>
                    <Card.Text>
                        <label>Owner First Name</label>
                        <input name='owner_first_name' type="text" onChange={handleOnChange} />
                        <label>Owner Last Name</label>
                        <input name='owner_last_name' type="text" onChange={handleOnChange} />
                        <label>Street Address</label>
                        <input name='street_address' type="text" onChange={handleOnChange} />
                        <br></br>
                        <label>City</label>
                        <br></br>
                        <input name='city' type="text" onChange={handleOnChange} />
                        <br></br>
                        <label>zipcode</label>
                        <br></br>
                        <input name='zipcode' type="text" onChange={handleOnChange} />
                        <br></br>
                        <label>email</label>
                        <br></br>
                        <input name='email' type="text" onChange={handleOnChange} />
                        <label>Phone Number</label>
                        <input name='mobile_phone' type="text" onChange={handleOnChange} />
                        <label>User Name</label>
                        <input name='user_name' type="text" onChange={handleOnChange} />
                        <label>Password</label>
                        <input name='password' type="text" onChange={handleOnChange} />
                        <br></br>
                        <br></br>
                        <Button onClick={signUp} variant="primary">SIGN UP</Button>
                        {errormsg ? <p>{errormsg}</p> : ''}
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )

}

export default Register;