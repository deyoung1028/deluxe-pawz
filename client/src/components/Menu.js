import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/images/css/menu.css'
import dpLogo from '../style/images/dpLogo.png'


function Menu (props) {

    return (
        <div className = 'menu'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <div className = 'logo'>
                    <Navbar.Brand>
                        <img class = 'logoimg'
                            alt=""
                            src={dpLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            
                        />{' '}Deluxe Pawz</Navbar.Brand>
                        </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href='#/'><NavLink to = "/"><div>Home</div></NavLink></Nav.Link>
                        <Nav.Link href='#about'><NavLink to = "/about"><div>About</div></NavLink></Nav.Link>
                            <Nav.Link href='#login'>{props.isAuthenticated ? null: <NavLink to = "/login"><div>Login</div></NavLink> }</Nav.Link>
                            <Nav.Link href="#register">{props.isAuthenticated ? null: <NavLink to = "/register"><div>Sign Up</div></NavLink> }</Nav.Link>
                            <Nav.Link href="#services">{props.isAuthenticated ? null: <NavLink to = "/services"><div>Services</div></NavLink> }</Nav.Link>
                            <Nav.Link href="#add-pet">{props.isAuthenticated ? <NavLink to = "/add-pet"><div>Add a Pet</div></NavLink>:null}</Nav.Link>
                            <a href = "https://www.facebook.com/Deluxe-Pawz-110133448023235/?ref=page_internal"><i class="fa fa-facebook-square"></i></a>
                            {/* <Nav.Link href="#addservices">{props.isAuthenticated ? <NavLink to = "/addservices"><div>Add Services</div></NavLink>:null}</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}
export default connect(mapStateToProps)(Menu);

