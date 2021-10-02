import {useState} from 'react'
import {connect} from 'react-redux'
import dpyellowlab from '../style/images/dpyellowlab.jpg'
import '../style/images/css/login.css'
import{Card, Button} from 'react-bootstrap'

function UserLogin (props) {
    const [user, setUserLogin] = useState({
        user_name:'',
        password:'',
        customer_id:''
    })
    const [errormsg, setErrormsg] = useState ()


    const handleOnChange = (e) => {
        setUserLogin({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const login = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
            console.log(result);
            if(!result.success) {
                setErrormsg("Wrong username/password combination!")
            }else{
                console.log('login was successful!')
                console.log(result)
                setErrormsg()
                localStorage.setItem('customer_id', result.user.customer_id)
                localStorage.setItem('user_name', result.user.user_name)
                props.onLogin()
                props.history.push('/profile')
            }
        });
    };


    return (
        <div className = "login">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dpyellowlab} />
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                             <Card.Text>
                                <label>UserName</label>
                                    <input name='user_name' type="text" onChange={handleOnChange} />
                                <label>Password</label>
                                    <input name='password' type="text" onChange={handleOnChange} />
                                    <Button onClick={login} variant="primary">Login</Button>
                                        {errormsg ? <p>{errormsg}</p> : ''}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: () => dispatch ({type:'ON_LOGIN'})

    }
}

const mapStateToProps = (state) => {
    return {
        ON_LOGIN: state.user_name
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);
