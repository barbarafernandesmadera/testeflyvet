import React from "react";
import { StaticImage } from "gatsby-plugin-image"; // Importando StaticImage para a imagem estática

import Layout from "../components/layout";
import localSushiVegano from "../images/localsushivegano.jpg"; 

const ContactPage = () => (
  <Layout>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Contato</h1>
      <p>Entre em contato conosco através dos seguintes meios:</p>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li>
          <strong>Horário de funcionamento:</strong> 11:00 - 15:00 de Seg a Sáb
        </li>
        <li>
          <strong>Localização:</strong>{" "}
          <a
            href="https://www.google.com/maps?q=Rua+Alfredo+Lopes+1717,+13560460"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007BFF", textDecoration: "underline" }}
          >
            Rua Alfredo Lopes 1717 - CEP 13560460
          </a>
        </li>
        <li>
          <strong>Telefone:</strong> (16) 98765-1234 - Whatsapp
        </li>
      </ul>

      {/* Imagem do Restaurante */}
      <img
        src={localSushiVegano}
        alt="Local do restaurante vegano japonês"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px auto",
          borderRadius: "8px",
          display: "block",
        }}
      />
    </div>

    {/* Logo na parte inferior com o tamanho aumentado */}
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <StaticImage
        src="../images/logoclara.png" // Imagem do logo do restaurante
        loading="eager"
        width={300} // Tamanho aumentado do logo
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Logo do Contra o Filé"
        style={{ marginBottom: "20px" }}
      />
    </div>
  </Layout>
);

export default ContactPage;
