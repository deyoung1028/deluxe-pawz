import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'

function Menu (props) {

    return (
        <div className = 'menu'>
            <h1 className = 'siteName'>Deluxe Paws</h1>

            {props.isAuthenticated ? null: <NavLink to = "/login"><div>Login</div></NavLink> }
            {props.isAuthenticated ? null: <NavLink to = "/register"><div>Sign Up</div></NavLink> }
            {props.isAuthenticated ? null: <NavLink to = "/services"><div>Services</div></NavLink> }

           
            {props.isAuthenticated ? <NavLink to = "/add-pet"><div>Add a Pet</div></NavLink>:null}
            {props.isAuthenticated ? <NavLink to = "/addservices"><div>Add Services</div></NavLink>:null}



            <NavLink to = "/"><div>Home</div></NavLink>
            <NavLink to = "/about"><div>About</div></NavLink>
            
            
            

        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}
export default connect(mapStateToProps)(Menu);