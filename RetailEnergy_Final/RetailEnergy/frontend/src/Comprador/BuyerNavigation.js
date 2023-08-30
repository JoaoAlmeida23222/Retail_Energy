import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoComprador from "../recursos/Logotipo_Comprador.svg";
import Default from "../recursos/default.png";

export default function BuyerNavigation() {
  //* ========== Começo das Configurações ========== *//
  const [showSidebar, setShowSidebar] = useState(true);
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const navigate = useNavigate();

  // Nome e Sobrenome guardados na Session Storage
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("loggedInUsername");
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
      console.log("Nome e Sobrenome:", storedUsername);
    }
  }, []);

  // ========== Funcionalidade da Sidebar ========== //
  // Resize no responsivo (quando em fullscreen fica permanentemente aberto)
  useEffect(() => {
    const Resize = () => {
      setShowSidebar(window.innerWidth > 900);
    };
    window.addEventListener("resize", Resize);
    Resize();
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  const Logout = () => {
    Swal.fire({
      icon: "question",
      title: "Deseja dar Logout?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#198754",
      cancelButtonText: '<i class="fa-solid fa-thumbs-down"></i>',
      confirmButtonText: 'Sair <i class="fa-solid fa-right-from-bracket"></i>',
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("loggedInUsername");
        navigate("/login_comprador");
      }
    });
  };
  //* ========== Fim das Configurações ========== *//
  return (
    <>
      <header
        className="sidebar"
        id="header"
        style={{
          marginLeft: showSidebar ? "" : "-310px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div className="d-flex flex-column">
          <div className="mt-3">
            <img width="290" src={LogoComprador} alt="LogoRT" />
            <div className="mt-2 d-flex flex-row align-items-center gap-2">
              <img
                width="40"
                className="image-custom"
                src={Default}
                alt="FotoPerfilUtilizador"
              />
              <span>{loggedInUsername}</span>
            </div>
          </div>
          <hr className="text-dark opacity-25" />
          <nav className="nav-menu-comprador text-light">
            <ul>
              <li>
                <Link to="/home_comprador" className="nav-link">
                  <i className="fa-solid fa-home"></i>
                  Início
                </Link>
              </li>
              <li>
                <Link to="editar_perfil_comprador" className="nav-link">
                  <i className="fa-solid fa-user-pen"></i>
                  Editar perfil
                </Link>
              </li>
              <li>
                <Link to="catalogo_ofertas" className="nav-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Efetuar compra
                </Link>
              </li>
              <li>
                <Link to="consultar_transacoes_comprador" className="nav-link">
                  <i className="fa-solid fa-money-bill-transfer"></i>
                  Estado transações
                </Link>
              </li>
              <Link onClick={Logout} className="nav-link logout">
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <button
        style={{
          marginLeft: showSidebar ? "" : "-310px",
          transition: "margin-left 0.3s ease-in-out",
        }}
        className="sidebar-button"
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fa-solid fa-bars-staggered fa-xl"></i>
      </button>
      {/* Content */}
      <div
        className="main-container"
        style={{
          marginLeft: showSidebar ? "" : "-310px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
