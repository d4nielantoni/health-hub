import React from "react";
import { useState } from "react";
import { Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import gerar_cor from "../utils/geradorCor.js";
import supabase from "../utils/client.js";
import Message from "./Message.jsx";

export default function ChatMessager() {
  const [messages, setMessages] = useState([
    {
      mensagem: "Diga algo...",
      usuario: localStorage.getItem("user"),
      cor_profile: "#757AF0",
      created_at: new Date().toLocaleString(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const usuario = localStorage.getItem("user");

  async function insertData(table, updateData) {
    const { data, error } = await supabase.from(table).insert(updateData);
    if (error) console.log("error", error);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const cor_profile = gerar_cor();
      const mensagem = `${newMessage}`;

      setMessages((prev) => [
        ...prev,
        {
          usuario,
          mensagem,
          cor_profile,
          created_at: new Date().toLocaleString(),
        },
      ]);
      insertData("mensagens", { usuario, mensagem, cor_profile });
      setNewMessage("");
    }
  };

  supabase
    .channel("mensagens-chat")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "mensagens",
      },
      (payload) => {
        const cleanedIsoString = payload.new.created_at.replace(/\.\d+/, "");
        const date = new Date(cleanedIsoString);

        setMessages((prev) => [
          ...prev,
          {
            usuario: payload.new.usuario,
            mensagem: payload.new.mensagem,
            cor_profile: payload.new.cor_profile,
            created_at: date.toLocaleString(),
          },
        ]);
      }
    )
    .subscribe();

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
                <Card.Body>
                  <Message
                    usuario={msg.usuario}
                    mensagem={msg.mensagem}
                    cor_profile={msg.cor_profile}
                    created_at={msg.created_at}
                  />
                </Card.Body>
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
