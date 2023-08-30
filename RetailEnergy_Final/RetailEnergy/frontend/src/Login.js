import { Link } from "react-router-dom";
import LogoPreto from "./recursos/Logo_Preto.svg";

export default function Login() {
  return (
    <section className="d-flex login-custom min-vh-100">
      <div className="form-signin w-100 m-auto rounded">
        <div className="text-center mb-4">
          <img width={100} src={LogoPreto} alt="LogoRetailEnergy" />
          <h3 className="my-2 fw-normal">Bem-Vindo</h3>
          <small>Onde deseja ir?</small>
        </div>
        <form className="px-3">
          <div className="d-grid gap-2">
            <Link to="/login_admin" className="btn-admin">
              Administrador
            </Link>
            <Link to="/login_vendedor" className="btn-vendedor">
              Vendedor
            </Link>
            <Link to="/login_comprador" className="btn-comprador">
              Comprador
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
