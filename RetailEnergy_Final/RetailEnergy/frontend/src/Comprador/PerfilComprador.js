import { useEffect, useState } from "react";
import Default from "../recursos/default.png";

export default function EditarPerfil() {
  //* ===== Configurações ===== //
  const [loggedInUsername, setLoggedInUsername] = useState("");

  // Nome e Sobrenome guardados na Session Storage
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("loggedInUsername");
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
      console.log("Nome e Sobrenome:", storedUsername);
    }
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
            className="perfil-imagem-comprador"
            src={Default}
            alt="FotoPerfilUtilizador"
          />
          <h4 className="fw-bold mt-1 mb-0">{loggedInUsername}</h4>
          <span>Comprador</span>
          <div className="mt-2">
            <button className="btn btn-sm btn-danger">
              Apagar conta <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
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
                className="form-control rounded-pill form-comprador"
                placeholder="Nome Próprio"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-comprador"
                placeholder="Sobrenome"
              />
            </div>
          </div>
          <br />
          <input
            type="email"
            className="form-control rounded-pill form-comprador"
            placeholder="Email"
          />
          <br />
          <div className="row">
            <div className="col">
              <input
                type="password"
                className="form-control rounded-pill form-comprador"
                placeholder="Password"
              />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control rounded-pill form-comprador"
                placeholder="Repetir Password"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-comprador"
                placeholder="Empresa"
              />
            </div>
            <div className="col">
              <input
                type="phone"
                pattern="[0-9]"
                maxLength="9"
                className="form-control rounded-pill form-comprador"
                placeholder="Telemóvel"
              />
            </div>
          </div>
          <br />
          <input
            type="text"
            className="form-control rounded-pill form-comprador"
            placeholder="Morada"
          />
          <br />
          <input
            type="text"
            className="form-control rounded-pill form-comprador"
            placeholder="Morada Adicional"
          />
          <br />
          <div className="row">
            <div className="col">
              <input
                type="tel"
                pattern="[0-9]"
                className="form-control rounded-pill form-comprador"
                placeholder="Código Postal"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control rounded-pill form-comprador"
                placeholder="Cidade"
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn-perfil-comprador rounded-pill">
              Salvar
            </button>
            <button
              type="button"
              className="btn-outline-perfil-comprador rounded-pill"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
