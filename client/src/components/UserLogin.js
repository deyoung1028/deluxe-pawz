import {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom';

function UserLogin (props) {
    const [user, setUserLogin] = useState({
        user_name:'',
        password:'',
        customer_id:''
    })
    const [errormsg, setErrormsg] = useState ()

    let history = useHistory();

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
            <h2>Login</h2>
            <label>UserName</label>
            <input name = 'user_name' type = "text" onChange={handleOnChange}/>
            <label>Password</label>
            <input name = 'password' type = "text" onChange={handleOnChange}/>
            <button onClick = {login}>Login</button>
            {errormsg ? <p>{errormsg}</p> :''}
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
