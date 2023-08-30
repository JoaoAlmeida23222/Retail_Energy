import { Link } from "react-router-dom";
// Outros Imports
import WallpaperBanner from "./recursos/WallpaperBanner.jpg";
import Imagem1 from "./recursos/Imagem1.jpg";
import Imagem2 from "./recursos/Imagem2.jpg";
import EnergiaRenovável from "./recursos/cloud-sun.svg";
import PagamentoSeguro from "./recursos/cash-coin.svg";
import Suporte from "./recursos/users.svg";
import ApoioTécnico from "./recursos/mail.svg";
import ApoioCliente from "./recursos/phone.svg";
import CentroApoio from "./recursos/chat-left-dots-fill.svg";
// Imports Logos/Logótipos
import LogoRE from "./recursos/Logotipo_RE_Branco.svg";

export default function Homepage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-dark navbar-dark navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <img width={260} src={LogoRE} alt="LogotipoRetailEnergy" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#sobre" className="nav-link text-decoration-none">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#carateristicas"
                  className="nav-link text-decoration-none"
                >
                  Caraterísticas
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactos" className="nav-link text-decoration-none">
                  Contactos
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/login" className="btn btn-light text-decoration-none">
                Login <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            </form>
          </div>
        </div>
      </nav>
      {/* Banner */}
      <img src={WallpaperBanner} className="d-block w-100" alt="Banner" />
      {/* Sobre */}
      <section id="sobre" className="container py-5 my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
            <div>
              <h5 style={{ color: "#5bc529" }}>Sobre nós</h5>
              <h3 className="fw-bold">O nosso compromisso</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate ac ante eu imperdiet. Nunc quis lacus vehicula,
                tincidunt tortor quis, dignissim diam. Sed interdum pharetra
                justo id convallis. Fusce eget ante gravida, suscipit lacus vel,
                suscipit augue. Aenean et dolor sed turpis aliquam pharetra.
                Suspendisse ut ante dignissim, euismod purus at, facilisis urna.
                Nunc dui nunc, aliquet nec sem et, molestie feugiat eros.
                Suspendisse sollicitudin pretium dolor nec vulputate. Aliquam
                semper risus ac dui aliquet interdum. Fusce euismod magna vitae
                placerat viverra. Etiam ut risus ac neque posuere molestie. Ut
                ut ullamcorper mauris. Praesent feugiat vestibulum dolor.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img alt="..." className="img-fluid rounded" src={Imagem1} />
          </div>
        </div>
        <div className="mt-5 row d-flex justify-content-center">
          <div className="col-md-6">
            <img alt="..." className="img-fluid rounded" src={Imagem2} />
          </div>
          <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
            <div>
              <h3 className="fw-bold">O nosso compromisso</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate ac ante eu imperdiet. Nunc quis lacus vehicula,
                tincidunt tortor quis, dignissim diam. Sed interdum pharetra
                justo id convallis. Fusce eget ante gravida, suscipit lacus vel,
                suscipit augue. Aenean et dolor sed turpis aliquam pharetra.
                Suspendisse ut ante dignissim, euismod purus at, facilisis urna.
                Nunc dui nunc, aliquet nec sem et, molestie feugiat eros.
                Suspendisse sollicitudin pretium dolor nec vulputate. Aliquam
                semper risus ac dui aliquet interdum. Fusce euismod magna vitae
                placerat viverra. Etiam ut risus ac neque posuere molestie. Ut
                ut ullamcorper mauris. Praesent feugiat vestibulum dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Caraterísticas */}
      <section
        id="carateristicas"
        className="box-custom d-flex justify-content-center align-items-center text-center py-5 px-5"
      >
        <div className="row gap-5">
          <div className="col">
            <img src={EnergiaRenovável} alt="IconEnergiaRenovável" />
            <h2 className="my-3 fw-bold">
              Energia <span style={{ color: "#ffce51" }}>Renovável</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate ac ante eu imperdiet. Nunc quis lacus vehicula,
              tincidunt tortor quis, dignissim diam. Sed interdum pharetra justo
              id convallis.
            </p>
          </div>
          <div className="col">
            <img src={PagamentoSeguro} alt="IconPagamentoSeguro" />
            <h2 className="my-3 fw-bold">
              Pagamento <span style={{ color: "#5bc529" }}>Seguro</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate ac ante eu imperdiet. Nunc quis lacus vehicula,
              tincidunt tortor quis, dignissim diam. Sed interdum pharetra justo
              id convallis.
            </p>
          </div>
          <div className="col">
            <img src={Suporte} alt="IconSuporte" />
            <h2 className="my-3 fw-bold">
              Suporte <span style={{ color: "#467fc2" }}>24/7</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate ac ante eu imperdiet. Nunc quis lacus vehicula,
              tincidunt tortor quis, dignissim diam. Sed interdum pharetra justo
              id convallis.
            </p>
          </div>
        </div>
      </section>
      {/* Apoio Técnico/ Apoio ao Cliente / Centro de Apoio */}
      <section className="d-flex justify-content-center align-items-center text-center my-5 py-5 px-5">
        <div className="row gap-5">
          <div className="col">
            <img width="100" src={ApoioTécnico} alt="IconApoioTécnico" />
            <h4 className="mt-3">Apoio Técnico:</h4>
            <p>
              <b>apoio@retailenergy.pt</b> <br />
              Horário: <b>dias úteis das 10h às 18h</b>
            </p>
          </div>
          <div className="col">
            <img width="100" src={ApoioCliente} alt="IconApoioCliente" />
            <h4 className="mt-3">Apoio ao Cliente:</h4>
            <p>
              <b>+351 210 532 681</b> <br />
              Chamada para a rede fixa nacional <br />
              Contacto preferencial por e-mail. <br />
              Horário: <b>dias úteis das 10h-13h e 14h-18h</b>
            </p>
          </div>
          <div className="col">
            <img width={100} src={CentroApoio} alt="IconCentroApoio" />
            <h4 className="mt-3">Centro de Apoio:</h4>
            <p>
              <b>apoio@retailenergy.pt</b> <br />
              Aceda a todo o nosso conteúdo de apoio: Perguntas Frequentes
              Tickets de Apoio
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contactos">
        <div className="d-flex flex-wrap justify-content-center gap-4 fw-bold">
          <span>Sobre</span>
          <span>Caraterísticas</span>
          <span>Termos e condições</span>
          <span>Contacte-nos</span>
        </div>
        <div className="d-inline-flex gap-3">
          <i className="fs-1 fa-brands fa-instagram"></i>
          <i className="fs-1 fa-brands fa-youtube"></i>
          <i className="fs-1 fa-brands fa-facebook"></i>
          <i className="fs-1 fa-brands fa-linkedin"></i>
          <i className="fs-1 fa-brands fa-twitter"></i>
        </div>
        <small>© 2023 Retail Energy | Todos os direitos reservados.</small>
      </footer>
    </>
  );
}
