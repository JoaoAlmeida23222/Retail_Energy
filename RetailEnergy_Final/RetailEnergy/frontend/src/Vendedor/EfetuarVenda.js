import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FicheiroDownload from "../recursos/Contracto.pdf";
import endpoint from "../config/endpoints";

const EfetuarVenda = () => {
  //* ===== Configurações ===== //
  const [currentPage, setCurrentPage] = useState(0);
  const [, setFicheiro] = useState(null);
  // Página 1
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [morada, setMorada] = useState("");
  const [moradaAdicional, setMoradaAdicional] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [cidade, setCidade] = useState("");
  // Página 2
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [inflacao, setInflacao] = useState("");
  const [precoFinal, setPrecoFinal] = useState("");
  // Página 3
  //const [detalhes, setDetalhes] = useState("uma coisa");
  //const [documentosSend, setDocumentosSend] = useState("uma coisa");
  //const [documentosReceive, setDocumentosReceive] = useState("uma coisa");
  //const [vendido, setVendido] = useState(false);
  //const [tipoProposta, setTipoProposta] = useState(1);
  //const [produto, setProduto] = useState(5);

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
    if (
      nomeInicialGuardado ||
      nomeFinalGuardado ||
      enderecoGuardado ||
      enderecoAdicionalGuardado ||
      codigoPostalGuardado ||
      cidadeGuardada
    ) {
      setNome(nomeInicialGuardado);
      setSobrenome(nomeFinalGuardado);
      setEmail(emailGuardado);
      setMorada(enderecoGuardado);
      setMoradaAdicional(enderecoAdicionalGuardado);
      setCodigoPostal(codigoPostalGuardado);
      setCidade(cidadeGuardada);
    }
  }, []);

  //* POST Página 2
  const Pagina2Submissao = () => {
    const payload = {
      quantidade,
      preco,
      inflacao,
      precoFinal,
    };
    axios
      .post(`${endpoint}/produto/create`, payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Erro ao criar a sua proposta: " + err.response.data);
        alert("Erro ao criar a sua proposta: " + err.response.data);
      });

    // Muda para a página seguinte
    setCurrentPage(currentPage + 1);
  };

  const DadosInputSubmissao = () => {
    axios
      .post(`${endpoint}/proposta/create`)
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

  const paginaSeguinte = () => {
    setCurrentPage(currentPage + 1);
  };

  //* ===== Função dos botões da barra de paginação ===== //
  // Ao clicar num dos botões da barra, mostra a página escolhida
  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  //* ===== Icons das páginas ===== //
  const renderDots = () => {
    const iconsPaginas = [
      "fa-solid fa-circle-user",
      "fa-solid fa-euro-sign",
      "fa-solid fa-file-contract",
      "fa-solid fa-check",
    ];
    //* ===== Label/Nome das páginas ===== //
    const labelPaginas = [
      "Credenciais",
      "A sua oferta",
      "Contrato",
      "Confirmação",
    ];
    //* ===== Barra da Paginação ===== //
    const icons = iconsPaginas.map((icon, index) => (
      <div key={index}>
        <button
          className={`dot-vendedor my-2 ${
            currentPage === index ? "active" : ""
          }`}
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

  //* ===== Páginas ===== //
  const renderPageContent = () => {
    switch (currentPage) {
      case 0: // Página 1
        return (
          <div className="flex-container flex-child flex-column">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Nome Próprio"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </div>
            </div>
            <br />
            <input
              type="email"
              className="form-control rounded-pill form-vendedor"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-vendedor"
              placeholder="Morada"
              value={morada}
              onChange={(e) => setMorada(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-vendedor"
              placeholder="Morada adicional"
              value={moradaAdicional}
              onChange={(e) => setMoradaAdicional(e.target.value)}
            />
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Código Postal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn-seguinte-vendedor rounded"
              onClick={paginaSeguinte}
            >
              Próximo passo
            </button>
          </div>
        );
      case 1: // Página 2
        return (
          <div className="flex-container flex-child flex-column">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Quantidade"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control rounded-pill form-vendedor"
                  placeholder="Preço"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
              </div>
            </div>
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-vendedor"
              placeholder="Inflação (-3%, -2%, -1%, 0, 1%, 2%, 3%)"
              value={inflacao}
              onChange={(e) => setInflacao(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control rounded-pill form-vendedor"
              placeholder="Preço final"
              value={precoFinal}
              onChange={(e) => setPrecoFinal(e.target.value)}
            />
            <button
              className="btn-seguinte-vendedor rounded"
              onClick={Pagina2Submissao}
            >
              Próximo passo
            </button>
          </div>
        );
      case 2: // Página 3
        return (
          <div className="text-center">
            <h1 className="fw-bold">
              Declaração de <br /> cumprimento de normas{" "}
              <i className="fa-solid fa-file-pen"></i>
            </h1>
            <div className="btns-contrato ">
              <a
                href={FicheiroDownload}
                download="Contracto"
                className="btn-download-vendedor rounded-pill m-0"
              >
                Descarregar ficheiro
              </a>
              <label type="button" className="custom-file-upload rounded-pill">
                <input type="file" onChange={SubmeterFicheiro} />
                Submeter ficheiro
              </label>
            </div>
          </div>
        );
      case 3: // Última página
        return (
          <div className="text-center">
            <h1 className="fw-bold">
              Está tudo pronto{" "}
              <i className="fa-solid fa-check text-success"></i>
            </h1>
            <p className="mb-0">A sua oferta foi submetida</p>
            <Link to="/home_vendedor">
              <button
                onClick={DadosInputSubmissao}
                className="btn-pagamento-vendedor rounded-pill"
              >
                Criar contracto
              </button>
            </Link>
          </div>
        );
      default:
        return null;
    }
  };
  //* ===== Fim das Configurações ===== //
  //* ===== Container da Paginação ===== //
  return (
    <>
      <div className="bar-container">
        {/* Barra da paginação */}
        <div className="bar-vendedor">
          {/* Renderização dos botões da barra de paginação */}
          <div className="dot-container">{renderDots()}</div>
        </div>
      </div>
      {/* Renderização das Páginas */}
      <div className="page-content">{renderPageContent()}</div>
    </>
  );
};

export default EfetuarVenda;
