import AlertDismissible from "../../components/AlertDismissible";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Avaliacao() {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setShow(true);
  };

  return (
    <main className="container mt-3">
      <AlertDismissible
        show={show}
        setShow={setShow}
        type="success"
        heading="Avaliação enviada com sucesso!"
        message="Obrigado por avaliar nosso serviço!"
      />
      <h1>Avalie nosso serviço</h1>
      <p>
        Bem-vindo à nossa Página de Avaliação! Este espaço foi criado com o
        intuito de coletar suas valiosas opiniões e feedbacks sobre nossos
        produtos e serviços. Acreditamos que ouvir nossos clientes é essencial
        para aprimorar continuamente nossa oferta e garantir que suas
        expectativas sejam sempre atendidas.
      </p>
      <form className="form-group mt-4" onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Qualidade
            </label>
          </div>
          <select
            class="custom-select"
            name="qualidade"
            id="inputGroupSelect01"
            required
          >
            <option selected>Escolha...</option>
            <option value="Excelente">Excelente</option>
            <option value="Bom">Bom</option>
            <option value="Regular">Regular</option>
            <option value="Ruim">Ruim</option>
          </select>
        </div>
        <div
          className="d-flex flex-column mt-4 justify-content-start"
          style={{ maxWidth: "800px" }}
        >
          <label
            htmlFor="mensagem"
            style={{ fontSize: "1.2rem", marginBottom: "4px" }}
          >
            Deixe uma mensagem para nós sobre sua experiência
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Enviar
        </button>
      </form>
    </main>
  );
}
