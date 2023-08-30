import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import endpoint from "../config/endpoints";

export default function CatalogoDeOfertas() {
  //* ===== Configurações ===== //
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/proposta/list`)
      .then((response) => {
        const catalogoData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setCatalogo(catalogoData);
        console.log(catalogoData);
      })
      .catch((err) => {
        console.error("Erro de fetch das ofertas: " + err);
      });
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-header-custom">
        <h2>Catálogo de Ofertas</h2>
      </div>
      <div className="container flex flex-wrap gap-3 py-5">
        {/* ===== Card ===== */}
        {catalogo.map((data) => (
          <div
            key={data.id}
            className="card border-0 shadow"
            style={{ width: "14rem" }}
          >
            <div className="card-body">
              <h5 className="card-title fw-bold mb-0">
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
                  <span className="fw-bold">{data.produto.valorunitario}</span>
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
      </div>
    </>
  );
}
