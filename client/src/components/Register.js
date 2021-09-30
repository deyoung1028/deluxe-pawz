import {useState} from 'react'
import {useHistory} from 'react-router-dom';

function Register (props) {
    const [user, setUser] = useState({
        owner_first_name:'',
        owner_last_name:'',
        street_address:'',
        city:'',
        zipcode:'',
        email:'',
        mobile_phone:'',
        user_name:'',
        password:''
    })
    const [errormsg, setErrormsg] = useState ()
    let history = useHistory();
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const signUp = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((response) => {
            console.log('response', response);
            if(!response.ok) {
                setErrormsg("Username already exists!")
            }else{
                console.log('registration successful!')
                props.history.push('/login')
                setErrormsg()
            }
        });
    };

    

    return (
        <div className="register">
        <h1>Welcome to Deluxe Paws</h1>
         <h3>REGISTER</h3>
            <label>Owner First Name</label>
                <input name = 'owner_first_name' type = "text" onChange={handleOnChange}/>
            <label>Owner Last Name</label>
                <input name = 'owner_last_name'type = "text" onChange={handleOnChange}/>
            <label>Street Address</label>
                <input name = 'street_address' type = "text" onChange={handleOnChange}/>
            <label>City</label>
                <input name = 'city' type = "text" onChange={handleOnChange}/>
            <label>zipcode</label>
                <input name = 'zipcode' type = "text" onChange={handleOnChange}/>
            <label>email</label>
                <input name = 'email'type = "text" onChange={handleOnChange}/>
            <label>Phone Number</label>
                <input name = 'mobile_phone' type = "text" onChange={handleOnChange}/>
            <label>User Name</label>
                <input name = 'user_name' type = "text" onChange={handleOnChange}/>
            <label>Password</label>
                <input name = 'password' type = "text" onChange={handleOnChange}/>
            <button onClick = {signUp}>SIGN UP</button>
            {errormsg ? <p>{errormsg}</p> :''}

         </div>
    )

}

export default Register;