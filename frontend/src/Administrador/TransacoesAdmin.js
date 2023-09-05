import React, { useEffect, useState } from "react";
import axios from "axios";
import FicheiroDownload from "../recursos/Contracto.pdf";
import endpoint from "../config/endpoints";

export default function ConsultarTransacoes() {
  //* ===== Configurações ===== //
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/proposta/list`)
      .then((response) => {
        const transacoesData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setTransacoes(transacoesData);
        console.log(transacoesData);
      })
      .catch((err) => {
        console.error("Erro de fetch das transações: " + err);
      });
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-header-custom">
        <h2>Consultar transações</h2>
      </div>
      <div className="table-container rounded">
        <table class="table table-warning table-striped table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Estado</th>
              <th scope="col">Comprador</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço Kw/Uni</th>
              <th scope="col">Preço Total</th>
              <th scope="col">Contrato</th>
            </tr>
          </thead>
          <tbody>
            {transacoes.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>
                  <span
                    className={`badge ${
                      data.vendido ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {data.vendido ? "Vendido" : "Não Vendido"}
                  </span>
                </td>
                <td>
                  {data.comprador.nomeinicial} {data.comprador.nomefinal}
                </td>
                <td>
                  {data.responsavei.nomeinicial} {data.responsavei.nomefinal}
                </td>
                <td>{data.produto.quantidade}</td>
                <td>{data.produto.valorunitario}</td>
                <td>{data.produto.valortotal}</td>
                <td>
                  <a href={FicheiroDownload} download="Ficheiro">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
