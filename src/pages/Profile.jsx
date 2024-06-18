import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

function Profile() {
  const user = localStorage.getItem("user")

  return (
    <Container className="mt-2">
      <Row className="mb-4">
        <Col>
          <h1>Perfil</h1>
          <h2 style={{ fontSize: 15, fontWeight: 400 }}>Nome: {user}</h2>
          <h2 style={{ fontSize: 15, fontWeight: 400 }}>Email: email</h2>
          <h2 style={{ fontSize: 15, fontWeight: 400 }}>Plano de Saúde: Unimed</h2>
        </Col>
        <Col className="d-flex align-items-end justify-content-end">
          <Button href="editarperfil" variant="primary">
            Editar Perfil
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Histórico de Consultas</h1>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Consulta</th>
                <th>Data</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João</td>
                <td>Cardiologista</td>
                <td>12/09/2021</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>João</td>
                <td>Cardiologista</td>
                <td>12/09/2021</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>João</td>
                <td>Cardiologista</td>
                <td>12/09/2021</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>João</td>
                <td>Cardiologista</td>
                <td>12/09/2021</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>João</td>
                <td>Cardiologista</td>
                <td>12/09/2021</td>
                <td>14:00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
