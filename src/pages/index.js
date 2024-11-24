import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout>
    {/* Cabeçalho de boas-vindas */}
    <header style={{ backgroundColor: "#2D6A4F", padding: "30px 20px", textAlign: "center" }}>
      {/* Logo do Restaurante */}
      <StaticImage
        src="../images/logocompletaclara.png" // Imagem do logo do restaurante
        loading="eager"
        width={500} // Ajustando a largura do logo para ser maior
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Logo do Contra o Filé"
        style={{
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%", // Faz o logo ocupar o máximo de largura disponível
        }}
      />
      <h1 style={{ color: "white", fontSize: "2.5rem" }}>
        Bem-vindo ao Contra o Filé Sushi!
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        Experimente uma revolução no sabor com a culinária vegana e japonesa! 🌱
      </p>
    </header>

    {/* Seções principais */}
    <div className="sections-container" style={{ textAlign: "center", marginTop: "3rem" }}>
      <div className="section">
        <Link to="/menu">
          <button className="action-button">Nosso Menu</button>
        </Link>
        <p>Explore pratos que misturam tradição e inovação na culinária vegana.</p>
      </div>

      <div className="section">
        <Link to="/about">
          <button className="action-button">Sobre Nós</button>
        </Link>
        <p>Descubra nossa história, nossa paixão e como buscamos transformar a alimentação vegana.</p>
      </div>

      <div className="section">
        <Link to="/contact">
          <button className="action-button">Contato</button>
        </Link>
        <p>Entre em contato conosco para reservas, dúvidas ou parcerias.</p>
      </div>
    </div>

    {/* Redes sociais */}
    <div className="social-container" style={{ textAlign: "center", marginTop: "3rem" }}>
      <p>
        Conecte-se conosco nas redes sociais:
        <a href="https://instagram.com/contraofile" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{" "}
        ·{" "}
        <a href="https://facebook.com/contraofile" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </p>
    </div>

    {/* CSS para o estilo dos botões */}
    <style jsx>{`
      .action-button {
        background-color: #4caf50; /* Verde */
        color: white;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }

      .action-button:hover {
        background-color: #45a049;
      }

      .sections-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 0 2rem;
      }

      .section {
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 8px;
      }

      .social-container {
        margin-top: 2rem;
      }
    `}</style>
  </Layout>
);

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="Home - Contra o Filé Sushi" />;

export default IndexPage;
