import Tab from 'react-bootstrap/Tab';
import { Container, Row, Col } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ChatMessager from "../../components/ChatMessager";
import Posts from '../../components/blog/Posts';
//import styles from './blog.module.css';
import './blog.module.css'
import PostagensForm from '../../components/blog/PostagensForm';

function ExampleCarouselImage({ src, text }) {
    return (
        <img
            className="d-block w-100"
            src={src}
            alt={text}
            style={{
                height: '400px', objectFit: 'cover',
            }}
        />
    );
}

function Blog() {
    return (
        <Container>
            <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 mt-2"
        >
            <Tab eventKey="home" title="Novidades">
                {/* Conteúdo da aba Home */}

                {/* Carrosel */}
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage src="https://marcaspelomundo.com.br/wp-content/uploads/2021/08/2AMiJWY3MjOyJmLt92Yu8GZuVXbvxWZwNXYjJXYtBUYsV2ZuF2cpxWZ6AjM0UDOxIDOwEjOnVGcq5SN4MzM5YTNzgTMGJTJzgTMGJTJ0czN1MjRyUiN4AzMx8VL1ETLf12bj5icw1WLp5CcwFmRyUiRyUSQzUycwRHdopTM.jpg" text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="https://img.freepik.com/psd-gratuitas/quarto-de-hospital-com-cama-e-mesa-ia-generativa_587448-2097.jpg" text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src="https://informativoatitude.com.br/wp-content/uploads/2022/02/andrelino.jpg" text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p fontFamily="Cambria" color='#444'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* texto motivacional */}

                <p style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    textAlign: 'center', padding: '40px', fontFamily: 'Cambria'
                }}>

                    Médicos e hospitais, com sua dedicação e compaixão, salvam vidas e promovem a saúde.
                    A prevenção e o cuidado contínuo são essenciais para um bem-estar pleno. <br></br>Reconheçamos e
                    valorizemos esses heróis que nos oferecem esperança e cura.
                </p>


                {/* tabelinha de imagem */}
                <div className="d-flex justify-content-around container my-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://redevik.com.br/wp-content/uploads/2019/10/clinico-geral-1-rede-vik.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere1</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://redevik.com.br/wp-content/uploads/2019/10/clinico-geral-1-rede-vik.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere2</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://redevik.com.br/wp-content/uploads/2019/10/clinico-geral-1-rede-vik.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere3</Button>
                        </Card.Body>
                    </Card>
                </div>

            </Tab>
            <Tab eventKey="comentarios" title="Postagens">
                <Posts></Posts>
            </Tab>
            <Tab eventKey="minhasPostagens" title="Minhas postagens">
                <PostagensForm/>
            </Tab>
            <Tab eventKey="contact" title="Contato" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
        </Container>
        
    );
}

export default Blog;