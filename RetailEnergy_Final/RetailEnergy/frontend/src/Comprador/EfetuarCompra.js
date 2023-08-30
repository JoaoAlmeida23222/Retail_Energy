import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import endpoint from "../config/endpoints";
import Cards from "react-credit-cards-2";
import { toast } from "react-toastify";
import FicheiroDownload from "../recursos/Contracto.pdf";

const EfetuarCompra = () => {
  const [, setFicheiro] = useState(null);
  // Página 1
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [morada, setMorada] = useState("");
  const [moradaAdicional, setMoradaAdicional] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [cidade, setCidade] = useState("");
  // Cartão
  const [currentPage, setCurrentPage] = useState(0);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCCV, setCardCCV] = useState("");
  const [currentFocus, setCurrentFocus] = useState("");

  //* Página 1 Session Storage
  useEffect(() => {
    const nomeInicialGuardado = sessionStorage.getItem("nomeInicial");
    const nomeFinalGuardado = sessionStorage.getItem("nomeFinal");
    const emailGuardado = sessionStorage.getItem("email");
    const enderecoGuardado = sessionStorage.getItem("endereco");
    const enderecoAdicionalGuardado =
      sessionStorage.getItem("enderecoAdicional");
    const codigoPostalGuardado = sessionStorage.getItem("codigoPostal");
    const cidadeGuardada = sessionStorage.getItem("cidade");
    const nomeCartaoGuardado = sessionStorage.getItem("nomeCartao");
    const numCartaoGuardado = sessionStorage.getItem("numCartao");
    const dataCartaoGuardado = sessionStorage.getItem("dataCartao");
    const cvvCartaoGuardado = sessionStorage.getItem("cvvCartao");
    if (
      nomeInicialGuardado ||
      nomeFinalGuardado ||
      enderecoGuardado ||
      enderecoAdicionalGuardado ||
      codigoPostalGuardado ||
      cidadeGuardada ||
      nomeCartaoGuardado ||
      numCartaoGuardado ||
      dataCartaoGuardado ||
      cvvCartaoGuardado
    ) {
      setNome(nomeInicialGuardado);
      setSobrenome(nomeFinalGuardado);
      setEmail(emailGuardado);
      setMorada(enderecoGuardado);
      setMoradaAdicional(enderecoAdicionalGuardado);
      setCodigoPostal(codigoPostalGuardado);
      setCidade(cidadeGuardada);
      setCardName(nomeCartaoGuardado);
      setCardNumber(numCartaoGuardado);
      setCardExpiry(dataCartaoGuardado);
      setCardCCV(cvvCartaoGuardado);
    }
  }, []);

  const DadosInputSubmissao = () => {
    axios
      .patch(`${endpoint}/proposta/update/${""}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Erro na criação da proposta: " + err.response.data);
        alert("Erro na criação da proposta: " + err.response.data);
      });
  };

  // Lógica do file input
  const SubmeterFicheiro = (e) => {
    const ficheiroSelecionado = e.target.files[0];
    if (ficheiroSelecionado === null) {
      return;
    } else {
      setFicheiro(ficheiroSelecionado);
      setCurrentPage(currentPage + 1);
      toast.success("Ficheiro submetido!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleInputFocus = (e) => {
    setCurrentFocus(e.target.name);
  };

  //* ===== Cartão de crédito do react-credit-cards ===== //
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "number":
        setCardNumber(value);
        break;
      case "name":
        setCardName(value);
        break;
      case "expiry":
        setCardExpiry(value);
        break;
      case "ccv":
        setCardCCV(value);
        break;
      default:
        break;
    }
  };
  const paginaSeguinte = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const renderDots = () => {
    const iconsPaginas = [
      "fa-solid fa-circle-user",
      "fa-solid fa-euro-sign",
      "fa-solid fa-file-contract",
      "fa-solid fa-check",
    ];
    const labelPaginas = [
      "Credenciais",
      "Pagamento",
      "Contrato",
      "Confirmação",
    ];

    const icons = iconsPaginas.map((icon, index) => (
      <div key={index}>
        <button
          className={`dot my-2 ${currentPage === index ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
        >
          <i className={icon}></i>
        </button>
        <div className="d-flex justify-content-center align-items-center">
          <small className="position-absolute text-muted">
            {labelPaginas[index]}
          </small>
        </div>
      </div>
    ));

    return icons;
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="flex-container flex-child flex-column">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-comprador"
                  placeholder="Nome Próprio"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-comprador"
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </div>
            </div>
            <br />
            <input
              type="email"
              className="form-control rounded-pill form-comprador"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-comprador"
              placeholder="Morada"
              value={morada}
              onChange={(e) => setMorada(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-comprador"
              placeholder="Morada adicional"
              value={moradaAdicional}
              onChange={(e) => setMoradaAdicional(e.target.value)}
            />
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-comprador"
                  placeholder="Código Postal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-comprador"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn-seguinte-comprador rounded"
              onClick={paginaSeguinte}
            >
              Próximo passo
            </button>
          </div>
        );
      case 1:
        return (
          <div className="pagamento-container">
            <Cards
              cvc={cardCCV}
              expiry={cardExpiry}
              focused={currentFocus}
              name={cardName}
              number={cardNumber}
            />
            <div className="flex-container flex-column">
              <input
                type="tel"
                name="number"
                pattern="[0-9]"
                maxLength="16"
                className="form-control form-custom"
                placeholder="Número do cartão"
                value={cardNumber}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <br />
              <input
                type="text"
                name="name"
                className="form-control form-custom"
                placeholder="Nome do cartão"
                value={cardName}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <br />
              <div className="row">
                <div className="col">
                  <input
                    type="tel"
                    name="ccv"
                    pattern="[0-9]"
                    maxLength="3"
                    className="form-control form-custom"
                    placeholder="CCV"
                    value={cardCCV}
                    onChange={handleInputChange}
                    onClick={() => setCurrentFocus("cvc")}
                  />
                </div>
                <br />
                <div className="col">
                  <input
                    type="tel"
                    name="expiry"
                    pattern="[0-9]"
                    minLength="5"
                    maxLength="7"
                    className="form-control form-custom"
                    placeholder="MM/AAAA"
                    value={cardExpiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onKeyUp={(event) => {
                      event.target.value = event.target.value
                        .replace(/\D/g, "")
                        .substring(0, 6)
                        .replace(/(\d{2})(\d{0,4})/, "$1/$2");
                    }}
                  />
                </div>
              </div>
              <button
                className="btn-pagamento-comprador rounded-pill"
                onClick={paginaSeguinte}
              >
                Efetuar pagamento
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h1 className="fw-bold">
              Assinatura do contrato <i className="fa-solid fa-file-pen"></i>
            </h1>
            <p className="mb-0">
              Descarregue o contrato,
              <br /> assine e submeta!
            </p>
            <div className="btns-contrato">
              <a
                href={FicheiroDownload}
                download="Contracto"
                className="btn-download-comprador rounded-pill m-0"
              >
                Descarregar ficheiro
              </a>
              <label
                type="button"
                className="custom-file-upload-2 rounded-pill"
                //onClick={DadosInputSubmissao}
              >
                <input type="file" onChange={SubmeterFicheiro} />
                Submeter ficheiro
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h1 className="fw-bold">
              Está tudo pronto{" "}
              <i className="fa-solid fa-check text-success"></i>
            </h1>
            <p className="mb-0">
              Faça download do seu contrato{" "}
              <a href={FicheiroDownload} download="Contracto">
                aqui
              </a>
            </p>
            <Link to="/home_comprador">
              <button className="btn-pagamento-comprador rounded-pill">
                Voltar à Dashboard
              </button>
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bar-container">
        <div className="bar">
          <div className="dot-container">{renderDots()}</div>
        </div>
      </div>
      <div className="page-content">{renderPageContent()}</div>
    </>
  );
};

export default EfetuarCompra;
