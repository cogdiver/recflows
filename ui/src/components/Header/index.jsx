import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { primary_services, other_services } from '../../utils'


const Header = () => {

  return <Wrapper>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" variant="dark" navbar="dark" expanded={true}>
      <Container className="d-flex justify-content-center">
        <Link to="/" id="navbar-brand">RecFlows</Link>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {primary_services.map(s => <Link
                key={s.url}
                className="resources"
                to={s.url}>{s.name}
            </Link>)}
            <NavDropdown title="More" id="basic-nav-dropdown">
              {other_services.map(s => <Link
                key={s.url}
                className="dropdown-item"
                to={s.url}>{s.name}
              </Link>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Wrapper>
};

export { Header };
