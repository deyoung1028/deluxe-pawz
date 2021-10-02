import {Container, Card} from 'react-bootstrap'
import '../style/images/css/about.css'
import dpAlyssa from '../style/images/dpAlyssa.png'

function About() {
    return (
        <div className='aboutme'>
            <h1>About</h1>
            <Container fluid>
                        
                <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src= {dpAlyssa} />
                <Card.Body>
                    <Card.Text>
                    Hi there! Welcome to Deluxe Pawz, I'm so glad you're here! My whole life I have had a love for animals. At the age of 5, I started riding horses and to this day, I have continued with this passion. If you would have asked me at a young age what I wanted to be when I grew up, I would have told you that I wanted to be a veterinarian. However that quickly changed when I got my first job working for a local dog groomer. I started out assisting with bathing and drying the dogs, but I quickly progressed and found myself grooming after only working there for a short period of time. As my grooming skills continued to grow, I started thinking more about my future. It was very important to me that my career path should be successful, but also bring me joy! I knew two things: 1. I loved working with animals, and 2. I had a love of art and wanted an outlet for my creativity. After much consideration and dicussion, it became clear that I shoulld venture off and create my own business! So I present to you my love and passion . . . Deluxe Pawz! I look forward to building a long lasting relationship with you and your pet!
                    </Card.Text>
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default About