import {connect} from 'react-redux'
import AddPet from '../components/AddPet'

function Profile(props){
    return (
        <div className = "userProfile">
            <h1>WELCOME, {localStorage.getItem("user_name")} to your page!</h1>
            

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ON_LOGIN: state.user_name
    }
}

export default connect(mapStateToProps)(Profile);