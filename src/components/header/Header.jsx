import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./header.module.css"


export default function Header() {
  function getClassName({ isActive, isPending }) {
    return isPending ? "nav-link" : (isActive ? "nav-link active" : "nav-link");
  }

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className={getClassName} style={{ fontSize: "1.4rem" }}>
          Health<span style={{ color: "red" }}>Hub</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-sm-3">
            <NavLink to="/suporte" className={getClassName}>Suporte</NavLink>
            <NavLink to="/avaliacao" className={getClassName}>Avaliação</NavLink>
            <NavLink to="/recursos" className={getClassName}>Recursos</NavLink>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/sessoes" className={getClassName}>Sessões ao vivo</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <NavLink to="/recursos" className={getClassName}>Recursos</NavLink>
              </NavDropdown.Item>
            </NavDropdown> */
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}