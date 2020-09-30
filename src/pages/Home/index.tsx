import React from "react";
import { Link } from "react-router-dom";
import FooterDown from "../../components/FooterDown";

import MenuHead from "../../components/MenuHead";

import "./styles.css";

function Home() {
  return (
    <div className="home">
      <MenuHead />
      <div className="pbody">
        <div className="texto">
          <h1>
            PLATAFORMA <br />
            BIBLIOTECA COMUNITÁRIA
          </h1>
          <h3>
            Um acervo de documentos dedicados{" "}
            <strong>
              totalmente a <br />
              comunidade
            </strong>
          </h3>
        </div>
        <Link to="/category">
          <h2 className="attention">Acessar a categoria de livros</h2>
        </Link>
      </div>
      <div className="footerDownCategory">
        <FooterDown />
      </div>
    </div>
  );
}

export default Home;
