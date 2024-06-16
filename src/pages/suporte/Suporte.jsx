import { Container, Row, Col, Card } from "react-bootstrap";
import suportImg from "../../assets/suporte.png";
import ChatMessager from "../../components/ChatMessager";

export default function Suporte() {

  return (
    <main>
      <Container>
        <Row className="mt-4">
          <Col lg={7}>
            <h1>Chat de suporte</h1>
            <p>
              Além dos recursos e informações disponíveis em nosso site, nós
              também oferecemos suporte personalizado através do chat ao vivo.
            </p>
            <p>
              Não Enfrente Sozinho(a): Converse Agora com Nossos Conselheiros e
              Voluntários pelo Chat Ao Vivo! Sabemos que lidar com questões de
              saúde mental pode ser desafiador. É por isso que oferecemos
              suporte imediato e confidencial através do chat ao vivo com
              conselheiros treinados e voluntários atenciosos.
            </p>
            <Row>
              <Col>
                <Card
                  body
                  style={{ backgroundColor: "rgba(92, 92, 252, 0.397)" }}
                >
                  Esclarecer dúvidas sobre saúde mental.
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  style={{ backgroundColor: "rgba(92, 207, 252, 0.397)" }}
                >
                  Oferecer apoio emocional inicial.
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Card
                  body
                  style={{ backgroundColor: "rgba(92, 252, 113, 0.397)" }}
                >
                  Orientar sobre os recursos mais adequados para sua situação.
                </Card>
              </Col>
              <Col>
                <Card
                  body
                  style={{ backgroundColor: "rgba(217, 252, 92, 0.397)" }}
                >
                  Reduzir o sentimento de isolamento e te conectar com alguém
                  que te compreende.
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="mt-3 d-flex">
            <img src={suportImg} alt="" />
          </Col>
        </Row>
        <hr className="mt-5" />
        <ChatMessager />
      </Container>
    </main>
  );
}

