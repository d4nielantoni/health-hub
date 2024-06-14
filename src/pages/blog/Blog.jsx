import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

//import styles from './blog.module.css';
import './blog.module.css'


function Blog() {
    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Novidades">
                Tab content for Home
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./pages/blog/fotos/medicoConsulta.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </Tab>
            <Tab eventKey="profile" title="Comentarios">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contato" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default Blog;