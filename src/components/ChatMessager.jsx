import React from "react";
import { useState } from "react";
import { Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";

export default function ChatMessager() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <Row className="mt-4">
      <Col>
        <h2>Chat ao Vivo</h2>
        <div
          className="chat-box"
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            height: "300px",
            overflowY: "scroll",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className="chat-message"
              style={{ margin: "0.5rem 0" }}
            >
              <Card>
                <Card.Body>{msg}</Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Form onSubmit={handleSendMessage} className="mt-3 d-flex">
          <Form.Group controlId="newMessage">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Digite sua mensagem..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                type="submit"
              >
                Enviar
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
