import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import endpoint from "../config/endpoints";

export default function DashboardHomepage() {
  //* ===== Configurações ===== //
  const [ofertas, setOfertas] = useState([]);
  const [loggedInUsername, setLoggedInUsername] = useState("");

  // Nome e Sobrenome guardados na Session Storage
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("nomeInicial");
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
      console.log("Nome Próprio:", storedUsername);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${endpoint}/proposta/list`)
      .then((response) => {
        const ofertasData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setOfertas(ofertasData);
        console.log(ofertasData);
      })
      .catch((err) => {
        console.error("Erro de fetch das ofertas: " + err);
      });
  }, []);
  //* ===== Começo das Configurações ===== //
  return (
    <>
      <div className="top-vendedor">
        <h1>Bem-vindo à Retail Energy</h1>
      </div>
      {/* As suas ofertas */}
      <div className="box">
        <h5 className="mb-5">As suas ofertas</h5>
        <div className="flex flex-wrap gap-3">
          {/* ===== State Card ===== */}
          <div
            title="Adicionar oferta"
            className="card border-0 shadow user-select-none"
            style={{ width: "14rem" }}
          >
            <div className="card-body">
              <Link to="/efetuar_venda" className="card-overlay-vendedor">
                <i className="fa-solid fa-circle-plus"></i>
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
            </div>
          </div>
          {/* ===== Card ===== */}
          {ofertas
            .filter((data) => data.responsavei.nomeinicial === loggedInUsername)
            .map((data) => (
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
