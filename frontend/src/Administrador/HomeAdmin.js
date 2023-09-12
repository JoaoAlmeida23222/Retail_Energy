import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Progress } from "rsuite";
import "react-circular-progressbar/dist/styles.css";
import "rsuite/dist/rsuite.min.css";
import Default from "../recursos/default.png";
import endpoint from "../config/endpoints";

export default function DashboardHomepage() {
  //* ===== Configurações ===== //
  const [pedidosAdesaoComprador, setPedidosAdesaoComprador] = useState([]);
  const [pedidosAdesaoVendedor, setPedidosAdesaoVendedor] = useState([]);
  const [transacoes, setTransacoes] = useState([]);
  const percentagem = 61;

  useEffect(() => {
    // Pedidos de Adesão | Comprador
    axios
      .get(`${endpoint}/comprador/GetLast3CompradorforConfirmation`)
      .then((response) => {
        const pedidosAdesaoCompradorData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setPedidosAdesaoComprador(pedidosAdesaoCompradorData);
        console.log(pedidosAdesaoCompradorData);
      })
      .catch((err) => {
        console.error(
          "Erro de fetch nos pedidos de adesão dos compradores: " + err
        );
      });
    // Transações
    axios
      .get(`${endpoint}/proposta/last3list`)
      .then((response) => {
        const transacoesData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setTransacoes(transacoesData);
        console.log(transacoesData);
      })
      .catch((err) => {
        console.error("Erro de fetch nas transações: " + err);
      });

    // Pedidos de Adesão | Vendedores
    axios
      .get(`${endpoint}/responsaveis/GetLast3ResponsaveisforConfirmation`)
      .then((response) => {
        const pedidosAdesaoVendedorData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setPedidosAdesaoVendedor(pedidosAdesaoVendedorData);
        console.log(pedidosAdesaoVendedorData);
      })
      .catch((err) => {
        console.error(
          "Erro de fetch nos pedidos de adesão dos vendedores: " + err
        );
      });
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-admin">
        <h1>Bem-vindo à Retail Energy</h1>
      </div>
      {/* Transações */}
      <div className="box">
        <h5 className="mb-5">Últimas transações</h5>
        <div className="flex flex-wrap gap-3">
          {/* ===== Card ===== */}
          {transacoes.map((data) => (
            <div
              key={data.id}
              className="card border-0 shadow"
              style={{ width: "14rem" }}
            >
              <div className="card-body">
                <h5 style={{ color: "#467fc2" }} className="card-title mb-0">
                  {data.responsavei.nomeinicial} {data.responsavei.nomefinal}
                </h5>
                <small className="text-muted">
                  {data.responsavei.endereco},<br /> {data.responsavei.cidade}
                </small>
                <h5
                  style={{ color: "#5bc529" }}
                  className="card-title mt-3 mb-0"
                >
                  {data.comprador.nomeinicial} {data.comprador.nomefinal}
                </h5>
                <small className="text-muted">
                  {data.comprador.endereco},<br />
                  {data.comprador.cidade}
                </small>
                <div className="mt-4 d-flex flex-column gap-1">
                  <small>
                    Quantidade{" "}
                    <span className="fw-bold">{data.produto.quantidade}</span>
                  </small>
                  <small>
                    Preço kw/uni{" "}
                    <span className="fw-bold">
                      {data.produto.valorunitario}
                    </span>
                  </small>
                  <small>
                    Inflação{" "}
                    <span className="fw-bold">{data.produto.inflacao}</span>
                  </small>
                  <small>
                    Preço Total{" "}
                    <span className="fw-bold">{data.produto.valortotal}</span>
                  </small>
                </div>
              </div>
            </div>
          ))}
          {/* ===== State Card ===== */}
          <div
            title="Ver mais"
            className="card border-0 shadow user-select-none"
            style={{ width: "14rem" }}
          >
            <div className="card-body">
              <Link to="/consultar_transacoes_admin" className="card-overlay">
                <i className="fa-solid fa-eye"></i>
              </Link>
              <h5
                style={{ color: "#467fc2" }}
                className="placeholder card-title mb-0"
              >
                Rúben Gomes
              </h5>
              <small>
                <span className="placeholder">Azinhaga,</span>
                <br />
                <span className="placeholder">Santarém</span>
              </small>
              <h5
                style={{ color: "#5bc529" }}
                className="placeholder card-title mt-3 mb-0"
              >
                Rúben Gomes
              </h5>
              <small>
                <span className="placeholder">Azinhaga,</span>
                <br />
                <span className="placeholder">Santarém</span>
              </small>
              <div className="mt-4 d-flex flex-column gap-1">
                <small className="placeholder">
                  Quantidade <span className="fw-bold">0</span>
                </small>
                <small className="placeholder">
                  Preço kw/uni <span className="fw-bold">0</span>
                </small>
                <small className="placeholder">
                  Inflação <span className="fw-bold">0</span>
                </small>
                <small className="placeholder">
                  Preço Total <span className="fw-bold">0</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pedidos de adesão | Compradores */}
      <div className="box">
        <h5 className="mb-5">Pedidos de Adesão | Compradores</h5>
        <div className="flex flex-wrap gap-3">
          {/* ===== Card ===== */}
          {pedidosAdesaoComprador.map((data) => (
            <div
              key={data.id}
              className="card border-0 shadow"
              style={{ width: "14rem" }}
            >
              <img
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                src={Default}
                className="card-img-top"
                alt="FotoPerfilUtilizador"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {data.nomeinicial} {data.nomefinal}
                </h5>
                <small>Comprador</small>
                <div className="d-flex gap-1 mt-2">
                  <button className="btn btn-success w-100">
                    <i className="fs-2 fa-solid fa-check"></i>
                  </button>
                  <button className="btn btn-danger w-100">
                    <i className="fs-2 fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* ===== Card State ===== */}
          <div
            title="Ver mais"
            className="card border-0 shadow user-select-none"
            style={{ width: "14rem", position: "relative" }}
          >
            <img
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              src={Default}
              className="card-img-top"
              alt="FotoPerfilUtilizador"
            />
            <Link to="/pedidos_adesao" className="card-overlay">
              <i className="fa-solid fa-eye"></i>
            </Link>
            <div className="card-body">
              <h5 className="placeholder card-title mb-0">Rúben Gomes</h5>
              <small className="placeholder">Comprador</small>
              <div className="d-flex gap-1 mt-2">
                <button className="disabled btn btn-success w-100">
                  <i className="fs-2 fa-solid fa-check"></i>
                </button>
                <button className="disabled btn btn-danger w-100">
                  <i className="fs-2 fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pedidos de adesão | Vendedores */}
      <div className="box">
        <h5 className="mb-5">Pedidos de Adesão | Vendedores</h5>
        <div className="flex flex-wrap gap-3">
          {/* ===== Card ===== */}
          {pedidosAdesaoVendedor.map((data) => (
            <div
              key={data.id}
              className="card border-0 shadow"
              style={{ width: "14rem" }}
            >
              <img
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                src={Default}
                className="card-img-top"
                alt="FotoPerfilUtilizador"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {data.nomeinicial} {data.nomefinal}
                </h5>
                <small>Vendedor</small>
                <div className="d-flex gap-1 mt-2">
                  <button className="btn btn-success w-100">
                    <i className="fs-2 fa-solid fa-check"></i>
                  </button>
                  <button className="btn btn-danger w-100">
                    <i className="fs-2 fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* ===== Card State ===== */}
          <div
            title="Ver mais"
            className="card border-0 shadow user-select-none"
            style={{ width: "14rem", position: "relative" }}
          >
            <img
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              src={Default}
              className="card-img-top"
              alt="FotoPerfilUtilizador"
            />
            <Link to="/pedidos_adesao" className="card-overlay">
              <i className="fa-solid fa-eye"></i>
            </Link>
            <div className="card-body">
              <h5 className="placeholder card-title mb-0">Rúben Gomes</h5>
              <small className="placeholder">Comprador</small>
              <div className="d-flex gap-1 mt-2">
                <button className="disabled btn btn-success w-100">
                  <i className="fs-2 fa-solid fa-check"></i>
                </button>
                <button className="disabled btn btn-danger w-100">
                  <i className="fs-2 fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Estatísticas */}
      <div className="box">
        <p className="fw-bold">
          Objetivo Diário{" "}
          <span
            style={{ backgroundColor: "#f1eed3" }}
            className="badge text-dark"
          >
            40
          </span>
        </p>
        <p className="mb-5">
          Total de transações diárias{" "}
          <span
            style={{ backgroundColor: "#f1eed3" }}
            className="badge text-dark"
          >
            23
          </span>
        </p>
        <span>Resultados dos últimos meses:</span>
        <div className="estatisticas-container">
          <div className="d-inline-flex gap-4" style={{ height: 350 }}>
            <div className="d-flex flex-column align-items-center">
              <Progress.Line
                percent={34}
                vertical
                trailColor="#fff"
                strokeColor="#ffd600"
                strokeWidth={20}
                showInfo={false}
                style={{ height: "100%" }}
              />
              <span>Abr</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Progress.Line
                percent={16}
                vertical
                trailColor="#fff"
                strokeColor="#ffd600"
                strokeWidth={20}
                showInfo={false}
                style={{ height: "100%" }}
              />
              <span>Mai</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Progress.Line
                percent={90}
                vertical
                trailColor="#fff"
                strokeColor="#ffd600"
                strokeWidth={20}
                showInfo={false}
                style={{ height: "100%" }}
              />
              <span>Jun</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Progress.Line
                percent={67}
                vertical
                trailColor="#fff"
                strokeColor="#ffd600"
                strokeWidth={20}
                showInfo={false}
                style={{ height: "100%" }}
              />
              <span>Jul</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <Progress.Line
                percent={53}
                vertical
                trailColor="#fff"
                strokeColor="#ffd600"
                strokeWidth={20}
                showInfo={false}
                style={{ height: "100%" }}
              />
              <span>Ago</span>
            </div>
          </div>
          <div className="d-flex" style={{ width: 350, height: 350 }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: "#ffd600",
                trailColor: "#fff",
                textColor: "#000",
                textSize: "12px",
              })}
              value={percentagem}
              text={`${percentagem}%`}
              strokeWidth={13}
            />
          </div>
        </div>
      </div>
    </>
  );
}
