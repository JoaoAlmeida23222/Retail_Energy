import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import endpoint from "../config/endpoints";

export default function DashboardHomepage() {
  //* ===== Configurações ===== //
  const [propostas, setPropostas] = useState([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/proposta/last3list`)
      .then((response) => {
        const propostasData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setPropostas(propostasData);
        console.log(propostasData);
      })
      .catch((err) => {
        console.error("Erro de fetch das propostas: " + err);
      });
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-comprador">
        <h1>Bem-vindo à Retail Energy</h1>
      </div>
      {/* Propostas no mercado */}
      <div className="box">
        <h5 className="mb-5">Propostas no mercado</h5>
        <div className="flex flex-wrap gap-3">
          {/* ===== Card ===== */}
          {propostas.map((data) => (
            <div
              key={data.id}
              className="card border-0 shadow"
              style={{ width: "14rem" }}
            >
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {data.responsavei.nomeinicial} {data.responsavei.nomefinal}
                </h5>
                <small className="text-muted">
                  {data.responsavei.endereco},<br />
                  {data.responsavei.cidade}
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
                <Link
                  to="/efetuar_compra"
                  className="btn btn-success w-100 mt-3 text-decoration-none"
                >
                  Comprar
                </Link>
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
              <Link to="/catalogo_ofertas" className="card-overlay-comprador">
                <i className="fa-solid fa-eye"></i>
              </Link>
              <h5 className="placeholder card-title mb-0">Rúben Gomes</h5>
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
              <button className="placeholder disabled btn btn-success w-100 mt-3">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
