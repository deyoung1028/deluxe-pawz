
import { Container, Card } from 'react-bootstrap'
import '../style/images/css/services.css'
import dpBella from '../style/images/dpBella.png'
import dpoakley from '../style/images/dpoakley.jpg'
import dpaussie from '../style/images/dpaussie.jpg'
import dpalacart from '../style/images/dpalacart.jpg'
import dpScout from '../style/images/dpScout.png'



function Services() {
    return (
        <div>
            <h1>Deluxe Pawz Services</h1>
            <Container fluid>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dpBella} />
                    <Card.Body>
                        <Card.Title>Full Groom</Card.Title>
                        <Card.Text>
                        The "Full Groom" service includes a good bath, ear cleaning, nail trim, teeth brushing, gland expression (upon request), blow dry, sanitary trim, paw trim, and full body haircut.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dpScout} />
                    <Card.Body>
                        <Card.Title>Tidy Up</Card.Title>
                        <Card.Text>
                        The "Tidy Up" service is a step down from the full groom. The only difference is we are not taking any length off of the body. The "Tidy Up" includes a good bath, ear cleaning, nail trim, teeth brushing, gland expression (request only), blow dry, paw trim, and a sanitary trim.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Container>
                <p></p>
                <h4>At the end of ALL of our grooms, your pup will get a spritz of our seasonal cologne and your choice of a bow or bandana!</h4>
                <h1>Add On Services</h1>
                <Container fluid>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dpoakley} />
                    <Card.Body>
                        <Card.Title>"The Oakley"</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Bow $20</li>
                                <li>Necklace $20</li>
                                <li>Nail Polish $8</li>
                                 <p>$30 Value!!</p>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dpaussie} />
                    <Card.Body>
                        <Card.Title>"The Blue"</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Handmade bandana or bow-tie $15</li>
                                <li>Our "For Him" spa treatment $5</li>
                                     <p>$20 Value!</p>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dpalacart} />
                    <Card.Body>
                        <Card.Title>"A La Cart"</Card.Title>
                        <Card.Text>
                            <p> We also offer single add on services and products such as:</p>
                            <ul>
                                <li>Handmade Bows</li>
                                <li>Handmade Bandandas</li>
                                <li>Nailpolish</li>
                                <li>Necklaces</li>

                                     
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Container>            
        </div>
    )
}

export default Services