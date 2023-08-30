import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Imports das páginas
import Homepage from "./Homepage";
import Login from "./Login";
// Administrador
import AdminNavigation from "./Administrador/AdminNavigation";
import LoginAdmin from "./Administrador/LoginAdmin";
import HomeAdmin from "./Administrador/HomeAdmin";
import EditarPerfilAdmin from "./Administrador/PerfilAdmin";
import PedidosDeAdesao from "./Administrador/PedidosDeAdesao";
import ConsultarTransacoes from "./Administrador/TransacoesAdmin";
// Comprador
import LoginBuyer from "./Comprador/LoginComprador";
import SignUpBuyer from "./Comprador/SignUpComprador";
import BuyerNavigation from "./Comprador/BuyerNavigation";
import EditarPerfilBuyer from "./Comprador/PerfilComprador";
import HomeBuyer from "./Comprador/HomeComprador";
import CatalogoDeOfertas from "./Comprador/CatalogoDeOfertas";
import TransacoesComprador from "./Comprador/TransacoesComprador";
import EfetuarCompra from "./Comprador/EfetuarCompra";
// Vendedor
import LoginSeller from "./Vendedor/LoginVendedor";
import SignUpSeller from "./Vendedor/SignUpVendedor";
import SellerNavigation from "./Vendedor/SellerNavigation";
import EditarPerfilSeller from "./Vendedor/PerfilVendedor";
import HomeSeller from "./Vendedor/HomeVendedor";
import TransacoesVendedor from "./Vendedor/TransacoesVendedor";
import EfetuarVenda from "./Vendedor/EfetuarVenda";

export default function App() {
  return (
    <Router>
      <ToastContainer />
      {/* ===== Dashboards ===== */}
      <section className="dashboard-container">
        <Routes>
          {/* Administrador */}
          <Route element={<AdminNavigation />}>
            <Route path="/home_admin" element={<HomeAdmin />} />
            <Route
              path="/editar_perfil_admin"
              element={<EditarPerfilAdmin />}
            />
            <Route path="/pedidos_adesao" element={<PedidosDeAdesao />} />
            <Route
              path="/consultar_transacoes_admin"
              element={<ConsultarTransacoes />}
            />
          </Route>
          {/* Comprador */}
          <Route element={<BuyerNavigation />}>
            <Route path="/home_comprador" element={<HomeBuyer />} />
            <Route
              path="/editar_perfil_comprador"
              element={<EditarPerfilBuyer />}
            />


            <Route path="/catalogo_ofertas" element={<CatalogoDeOfertas />} />
            <Route
              path="/consultar_transacoes_comprador"
              element={<TransacoesComprador />}
            />
            <Route path="/efetuar_compra" element={<EfetuarCompra />} />
          </Route>
          {/* Vendedor */}
          <Route element={<SellerNavigation />}>
            <Route
              path="/editar_perfil_vendedor"
              element={<EditarPerfilSeller />}
            />
            <Route path="/home_vendedor" element={<HomeSeller />} />
            <Route
              path="/consultar_transacoes_vendedor"
              element={<TransacoesVendedor />}
            />
            <Route path="/efetuar_venda" element={<EfetuarVenda />} />
          </Route>
        </Routes>
      </section>
      {/* ===== Logins e SignUps ===== */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {/* Administrador */}
        <Route path="/login_admin" element={<LoginAdmin />} />
        {/* Comprador */}
        <Route path="/login_comprador" element={<LoginBuyer />} />
        <Route path="/signup_comprador" element={<SignUpBuyer />} />
        {/* Vendedor */}
        <Route path="/login_vendedor" element={<LoginSeller />} />
        <Route path="/signup_vendedor" element={<SignUpSeller />} />
      </Routes>
    </Router>
  );
}
