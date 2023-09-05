import { useEffect, useState } from "react";
import axios from "axios";
import Default from "../recursos/default.png";
import endpoint from "../config/endpoints";

export default function EditarPerfil() {
  //* ===== Configurações ===== //
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [email, setEmail] = useState("");

  // Nome e Sobrenome guardados na Session Storage
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("loggedInUsername");
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
      console.log("Nome e Sobrenome:", storedUsername);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${endpoint}/admin/list`)
      .then((response) => {
        const data = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setEmail(data.map((item) => item.email)); // Extract email values
        console.log(data);
      })
      .catch((err) => {
        console.error("Erro de fetch: " + err);
      });
  }, []);
  //* ===== Fim das Configurações ===== //
  return (
    <>
      <div className="top-header-custom">
        <h2>Definições de Perfil</h2>
      </div>
      {/* Foto */}
      <div className="flex-container box p-4">
        <div className="flex-child text-center">
          <img
            className="perfil-imagem-admin"
            src={Default}
            alt="FotoPerfilUtilizador"
          />
          <h4 className="fw-bold mt-1 mb-0">{loggedInUsername}</h4>
          <span>Administrador</span>
        </div>
        <div className="profile-divider">
          <div className="vr"></div>
        </div>
        {/* Form */}
        <form className="flex-child profile-inputs">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-admin"
                placeholder="Nome Próprio"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-admin"
                placeholder="Sobrenome"
              />
            </div>
          </div>
          <br />
          <input
            type="email"
            className="form-control rounded-pill form-admin"
            placeholder="Email"
            value={email}
          />
          <br />
          <div className="row">
            <div className="col">
              <input
                type="password"
                className="form-control rounded-pill form-admin"
                placeholder="Password"
              />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control rounded-pill form-admin"
                placeholder="Repetir Password"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-admin"
                placeholder="Empresa"
              />
            </div>
            <div className="col">
              <input
                type="phone"
                pattern="[0-9]"
                maxLength="9"
                className="form-control rounded-pill form-admin"
                placeholder="Telemóvel"
              />
            </div>
          </div>
          <br />
          <input
            type="text"
            className="form-control rounded-pill form-admin"
            placeholder="Morada"
          />
          <br />
          <input
            type="text"
            className="form-control rounded-pill form-admin"
            placeholder="Morada Adicional"
          />
          <br />
          <div className="row">
            <div className="col">
              <input
                type="tel"
                pattern="[0-9]"
                className="form-control rounded-pill form-admin"
                placeholder="Código Postal"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-admin"
                placeholder="Cidade"
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn-perfil-admin rounded-pill">
              Salvar
            </button>
            <button
              type="button"
              className="btn-outline-perfil-admin rounded-pill"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
