import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";

export default function Header() {
  function getClassName({ isActive, isPending }) {
    return isPending ? "nav-link" : (isActive ? "nav-link active" : "nav-link");
  }



  return (
    <Navbar expand="sm" className="d-flex justify-content-start align-items-center">
      <Container id='nav'>
        <NavLink to="/" className={getClassName} style={{ fontSize: "1.4rem" }}>
          Health<span style={{ color: "red" }}>Hub</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-sm-3">
            <NavLink to="/suporte" className={getClassName}>Suporte</NavLink>
            <NavLink to="/avaliacao" className={getClassName}>Avaliação</NavLink>      
            <NavLink to="/satisfaction" className={getClassName}>Satisfação</NavLink>
            <NavLink to="/recursos" className={getClassName}>Recursos</NavLink>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <NavLink to="/servicos" className={getClassName}>Todos serviços</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/blog" className={getClassName}>Blog</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/sessoes" className={getClassName}>Sessões ao vivo</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <NavLink to="/recursos" className={getClassName}>Recursos</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/login" className={getClassName}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}