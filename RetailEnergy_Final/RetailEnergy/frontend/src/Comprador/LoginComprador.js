import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoBuyer from "../recursos/Logo_Comprador.svg";
import axios from "axios";
import endpoint from "../config/endpoints";
import { toast } from "react-toastify";

export default function LoginComprador() {
  //* ===== Configurações ===== //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginComprador = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    if (!email || !password) {
      toast.dismiss();
      toast.warning("Preencha os campos obrigatórios!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const response = await axios.post(
          `${endpoint}/comprador/login`,
          payload
        );
        if (response.data.success && response.data.data !== null) {
          //console.log("Credenciais: ", response.data);
          sessionStorage.setItem(
            "loggedInUsername",
            `${response.data.data.nomeinicial} ${response.data.data.nomefinal}`
          );
          sessionStorage.setItem(
            "nomeInicial",
            `${response.data.data.nomeinicial}`
          );
          sessionStorage.setItem(
            "nomeFinal",
            `${response.data.data.nomefinal}`
          );
          sessionStorage.setItem("email", `${response.data.data.email}`);
          sessionStorage.setItem("endereco", `${response.data.data.endereco}`);
          sessionStorage.setItem(
            "enderecoAdicional",
            `${response.data.data.informacao}`
          );
          sessionStorage.setItem(
            "codigoPostal",
            `${response.data.data.codigopostal}`
          );
          sessionStorage.setItem("cidade", `${response.data.data.cidade}`);
          sessionStorage.setItem(
            "nomeCartao",
            `${response.data.data.cartao_nome}`
          );
          sessionStorage.setItem(
            "numCartao",
            `${response.data.data.cartao_numero}`
          );
          sessionStorage.setItem(
            "dataCartao",
            `${response.data.data.cartao_data}`
          );
          sessionStorage.setItem(
            "cvvCartao",
            `${response.data.data.cartao_CVV}`
          );
          //sessionStorage.setItem("loggedInId", `${response.data.data.id}`);
          //alert("Logado com sucesso:" + JSON.stringify(response.data)); // Alerta Login teste
          navigate("/home_comprador");
          toast.success("Logado com sucesso!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.dismiss();
          toast.error("Email e/ou password inválidos...", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (err) {
        console.error("Erro no login: ", err.response.data);
        alert("Erro no login: " + err.response.data);
      }
    }
  };
  //* ===== Fim das Configurações ===== //
  return (
    <section className="d-flex login-comprador min-vh-100">
      <div className="form-signin w-100 m-auto rounded">
        <div className="text-center mb-4">
          <img width="100" src={LogoBuyer} alt="LogoRetailEnergy_Comprador" />
          <h3 className="my-2 fw-normal">Entrar em Retail Energy</h3>
          <small>Introduza as suas credênciais abaixo.</small>
        </div>
        <form className="px-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="form-control mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="form-control mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex flex-column align-items-center gap-2">
            <button className="btn-comprador w-100" onClick={LoginComprador}>
              Entrar
            </button>
            <Link to="/signup_comprador" className="btn-comprador2 w-100">
              Criar
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
