import Tab from 'react-bootstrap/Tab';
import { Container, Row, Col } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
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
                                <h3>Conforto e segurança ate você</h3>
                                <p>Atendimentos de alta qualidade sempre prezando pelo bem estar do cliente.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExampleCarouselImage src="https://img.freepik.com/psd-gratuitas/quarto-de-hospital-com-cama-e-mesa-ia-generativa_587448-2097.jpg" text="Second slide" />
                            <Carousel.Caption>
                                <h3>Melhores alojamentos de Teresina</h3>
                                <p>Contamos com espaços individuais para todos os nossos pacientes.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExampleCarouselImage src="https://informativoatitude.com.br/wp-content/uploads/2022/02/andrelino.jpg" text="Third slide" />
                            <Carousel.Caption>
                                <h3>Longevidade formidavel a quem aqui passa</h3>
                                <p fontFamily="Cambria" color='#444'>
                                    Seu Jorjão perdeu a conta de quantos anos tem.
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
                                <Card.Title>1º lugar em atendimento ao cliente</Card.Title>
                                <Card.Text>
                                    Neste final de semana, o HealthHub bateu o recorde, alcançando o primeiro lugar em atendimento ao cliente. Este marco reflete nossa dedicação em fornecer serviços excepcionais e cuidados de alta qualidade.
                                </Card.Text>
                                <a href="https://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/2012/10/14/atendimento-em-primeiro-lugar/">
                                    <Button variant="primary">Ir ao conteudo</Button>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s2.glbimg.com/VhSfuIb9WvltI87yw0gybYjQjZ0=/620x465/s.glbimg.com/jo/g1/f/original/2016/02/05/diana.jpg" />
                            <Card.Body>
                                <Card.Title>1º lugar em medicina na Unesp passa por teriapias da nossa clinica</Card.Title>
                                <Card.Text>
                                    A conquista do 1º lugar em medicina na Unesp foi alcançada com a ajuda das terapias inovadoras da nossa clínica. Esse reconhecimento destaca a excelência dos nossos serviços em promover a saúde e o bem-estar.
                                </Card.Text>
                                <a href="https://g1.globo.com/educacao/noticia/2016/02/1-lugar-em-medicina-na-unesp-passa-em-seis-vestibulares-e-escolhe-usp.html">
                                    <Button variant="primary">Ir ao conteudo</Button></a>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://blog.psicologiaviva.com.br/wp-content/uploads/2016/11/46330-x-duvidas-sobre-o-trabalho-do-psicologo.jpg" />
                            <Card.Body>
                                <Card.Title>Top psicólogos da região </Card.Title>
                                <Card.Text>
                                    Estamos orgulhosos de estar no topo da tabela dos melhores psicólogos,
                                    destacando nosso compromisso com a excelência em saúde mental. Nossa dedicação
                                    e expertise nos posicionam como líderes no campo, proporcionando o melhor cuidado para nossos pacientes.
                                </Card.Text>
                                <a href="https://www.doctoralia.com.br/psicologo">
                                    <Button variant="primary">Ir ao conteudo</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                </Tab>
                <Tab eventKey="profile" title="Comentarios">
                <Posts></Posts>
                </Tab>
                <Tab eventKey="minhasPostagens" title="Minhas postagens">
                <PostagensForm/>
            </Tab>
                <Tab eventKey="contact" title="Contato">
                    {/*Aba de Contato*/}
                    <div style={{ margin: '30px' }}>
                        <h2 style={{ borderBottom: "3px solid red" }}>CONTATE-NOS</h2>

                        <h3>FORMULÁRIO DE CONTATO</h3>
                        <form style={{ width: "500px", margi: "30px", textAlig: "center" }}>
                            <div style={{ marginTop: "10px" }}>
                                <label htmlFor="nome">NOME:*</label>
                                <input class="form-control" type="text" id="nome" name="nome" required />
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <label htmlFor="email">E-MAIL:*</label>
                                <input class="form-control" type="email" id="email" name="email" required />
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <label htmlFor="empresa">EMPRESA:</label>
                                <input class="form-control" type="text" id="empresa" name="empresa" />
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <label htmlFor="telefone">TELEFONE:</label>
                                <input class="form-control" type="tel" id="telefone" name="telefone" />
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <label htmlFor="mensagem">MENSAGEM:*</label>
                                <textarea class="form-control" id="mensagem" name="mensagem" required></textarea>
                            </div>

                            <button class="btn btn-primary" type="submit" style={{ marginTop: "20px" }}>Enviar</button>
                        </form>
                        <h3 style={{ color: "red" }}>LOCALIZAÇÃO</h3>
                        <div>
                            <p><b>Endereço:</b> SAS - Quadra 5 Bloco J Ed. CFC 10º andar - Brasília-DF</p>
                            <p><b>CEP:</b> 70070-920</p>
                            <p><b>Tel:</b> (86) 99955-3758</p>
                            <button class="btn btn-danger" onClick={() => window.open('https://www.google.com/maps/place/Conselho+Federal+de+Contabilidade', '_blank')}>Exibir mapa ampliado</button>
                        </div>
                        <div>
                            <iframe
                                title="Mapa"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.742499566609!2d-47.89206288515471!3d-15.7921333890254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a4df8a8f7b3%3A0x8f6bb6766f4dd1da!2sConselho+Federal+de+Contabilidade!5e0!3m2!1sen!2sbr!4v1628885631175!5m2!1sen!2sbr"
                                width="600"
                                height="450"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Container >

    );
}

export default Blog;