import { Link } from "react-router-dom";
import axios from "axios";
import LogoSeller from "../recursos/Logo_Vendedor.svg";

export default function SignUpVendedor() {
  return (
    <section className="d-flex login-vendedor min-vh-100">
      <div className="form-signin w-100 m-auto rounded">
        <div className="text-center mb-4">
          <img width="100" src={LogoSeller} alt="LogoRetailEnergy_Vendedor" />
          <h3 className="my-2 fw-normal">Crie uma conta</h3>
          <small>Começe a sua jornada!</small>
        </div>
        <form className="px-4">
          <label className="form-label">
            Nome <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Introduza o seu Nome"
            className="form-control mb-3"
          />
          <label className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            placeholder="Introduza o seu Email"
            className="form-control mb-3"
          />
          <label className="form-label">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            placeholder="Introduza uma Password"
            className="form-control mb-4"
          />
          <div className="d-flex flex-column align-items-center gap-2">
            <Link to="/home_vendedor" className="btn-vendedor2 w-100">
              Criar
            </Link>
            <Link to="/login_vendedor" className="btn-vendedor w-100">
              Entrar
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
