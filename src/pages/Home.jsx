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
    <Navbar style={{backgroundColor:"#FF6666", height: 100}} >
      <Container>
          <Nav className="me-auto">
            <Nav.Link style={{width:105, color:'white', fontSize: 15, position: 'relative', left: 0}} href="/profile"><strong>PERFIL</strong></Nav.Link>
            <Nav.Link style={{width:235, color:'white', fontSize: 15, position: 'relative', left: 0}} href="/sessoes"><strong>TERAPIA ONLINE</strong></Nav.Link>
            <Nav.Link style={{width:375, color:'white', fontSize: 15, position: 'relative', left: -50}} href="/rastreamentodebem-estar"><strong>RASTREAMENTO DE BEM-ESTAR</strong></Nav.Link>
            <Nav.Link style={{width:330, color:'white', fontSize: 15, position: 'relative', left: -130}} href="/recursos"><strong>RECURSOS EDUCACIONAIS</strong></Nav.Link>
            <Nav.Link style={{width:420, color:'white', fontSize: 15, position: 'relative', left: -200}} href="/profissionaisdesaudemental"><strong>PROFISSIONAIS DE SAUDE MENTAL</strong></Nav.Link>
            <NavDropdown style={{width:140, backgroundColor:'white', inlineSize:135, blockSize:40, borderRadius:20, fontSize: 15, position: 'relative', left: -290}} title="MAIS SERVIÇOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/sessoes">
                Sessões ao vivo
              </NavDropdown.Item>
              <NavDropdown.Item href="/avaliacao">Avaliações/Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/suporte">
                Chat Suporte
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
    

    <Container>
      <div>

      </div>

    </Container>



    <Container>
      <div style={{ display: 'block', width: 750, textAlign:'center', padding: 30}}>
        <h4><strong></strong></h4>
        <Carousel fade style={{left:290}}>
          <Carousel.Item interval={5000}>
            <a href="/recursos">
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
      </Container>



      
    </>
  );
}

export default Home;