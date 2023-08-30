import React, { useEffect, useState } from "react";
import axios from "axios";
import Default from "../recursos/default.png";
import endpoint from "../config/endpoints";

export default function PedidosDeAdesao() {
  //* ===== Configurações ===== //
  const [pedidosAdesaoVendedor, setPedidosAdesaoVendedor] = useState([]);
  const [pedidosAdesaoComprador, setPedidosAdesaoComprador] = useState([]);

  useEffect(() => {
    // Pedidos de Adesão | Vendedores
    axios
      .get(`${endpoint}/responsaveis/list`)
      .then((response) => {
        const pedidosAdesaoVendedorData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setPedidosAdesaoVendedor(pedidosAdesaoVendedorData);
        console.log(pedidosAdesaoVendedor);
      })
      .catch((err) => {
        console.error(
          "Erro de fetch nos pedidos de adesão dos vendedores: " + err
        );
      });
    // Pedidos de Adesão | Compradores
    axios
      .get(`${endpoint}/comprador/list`)
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
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-header-custom">
        <h2>Pedidos de adesão</h2>
      </div>
      <div className="container py-5 flex flex-wrap gap-3">
        {/* ===== Card Comprador ===== */}
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
              <h5 className="card-title fw-bold mb-0">
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
        {/* ===== Card Vendedor ===== */}
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
              <h5 className="card-title fw-bold mb-0">
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
      </div>
    </>
  );
}
