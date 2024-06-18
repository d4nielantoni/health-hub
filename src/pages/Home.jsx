import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import imag from '../assets/img_RE.png';
import med from '../assets/med.png';
import bem from '../assets/bem.png';

//import img from '..assets/im_RE.png'



function Home() {
  return (
    <>
    <Navbar style={{backgroundColor:"#FF6666", height: 130}} >
      <Container>
          <Nav className="me-auto">
            <Nav.Link style={{width:135, color:'white', fontSize: 20, position: 'relative', left: -230}} href="/profile"><strong>PERFIL</strong></Nav.Link>
            <Nav.Link style={{width:235, color:'white', fontSize: 20, position: 'relative', left: -230}} href="/terapiaonline"><strong>TERAPIA ONLINE</strong></Nav.Link>
            <Nav.Link style={{width:375, color:'white', fontSize: 20, position: 'relative', left: -230}} href="/rastreamentodebem-estar"><strong>RASTREAMENTO DE BEM-ESTAR</strong></Nav.Link>
            <Nav.Link style={{width:330, color:'white', fontSize: 20, position: 'relative', left: -230}} href="/recursoseducacionais"><strong>RECURSOS EDUCACIONAIS</strong></Nav.Link>
            <Nav.Link style={{width:420, color:'white', fontSize: 20, position: 'relative', left: -230}} href="/profissionaisdesaudemental"><strong>PROFISSIONAIS DE SAUDE MENTAL</strong></Nav.Link>
            <NavDropdown style={{width:300, backgroundColor:'white', inlineSize:175, blockSize:45, borderRadius:20,fontSize: 20, position: 'relative', left: -230}} title="MAIS SERVIÇOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Fórum">Fórum</NavDropdown.Item>
              <NavDropdown.Item href="#ApoioOnline">
                Apoio Online
              </NavDropdown.Item>
              <NavDropdown.Item href="#Avaliações/Feedback">Avaliações/Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ChatSuporte">
                Chat Suporte
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>

    <div style={{ display: 'block', width: 900, textAlign:'center', margin:0, paddingBlock:20, justifySelf:'center', alignItems:'center', textAlign:'center', padding: 30, position:'relative', left:900}}>
      <h4><strong>HealthHub</strong></h4>
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <a href="https://chatgpt.com/">
          <img
            style={{borderRadius: 30}}
            className="d-block w-100"
            src={imag}
            alt="1"
          />
          </a>
          <Carousel.Caption>
            <h3>venha conhecer nossos recursos!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <a href="https://chatgpt.com/">
          <img
            style={{borderRadius: 30}}
            className="d-block w-100"
            src={med}
            alt="2"
          />
          </a>
          <Carousel.Caption>
            <h3>Temos otimos profissionais</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <a href="https://chatgpt.com/">
          <img
            style={{borderRadius: 30}}
            className="d-block w-100"
            src={bem}
            alt="3"
          />
          </a>
          <Carousel.Caption>
            <h3>Como esta o seu bem-estar?</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
    </>
  );
}

export default Home;