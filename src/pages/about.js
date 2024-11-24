import React from "react";
import Layout from "../components/layout";
import japonesVegano from "../images/japonesVegano.jpg"; // Certifique-se de que o caminho está correto
import temakiVegano from "../images/temaki-vegano.jpg";
import missoLamenVegano from "../images/misso-lamen-vegano.jpg";
import tofu from "../images/tofu.jpg";
import yakisobaVegano from "../images/yakisobaVegano.png";
import udonVegano from "../images/udon-vegano.jpg";

const AboutPage = () => (
  <Layout>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo ao nosso restaurante japonês vegano, onde a tradição da culinária japonesa encontra a
        sustentabilidade e o respeito aos animais. Nosso objetivo é proporcionar uma experiência
        gastronômica única, repleta de sabores autênticos, criados exclusivamente com ingredientes 100% 
        vegetais.
      </p>
      <p>
        Desde nossa fundação, temos como missão promover uma alimentação saudável e responsável,
        valorizando os princípios da cultura japonesa enquanto preservamos o meio ambiente. 
        Aqui, cada prato é cuidadosamente preparado para oferecer o melhor da culinária japonesa 
        em uma versão ética e acessível.
      </p>
      <p>
        Venha nos visitar e descubra como tradição e inovação podem se unir em cada prato.
      </p>
      {/* Imagem principal */}
      <img
        src={japonesVegano}
        alt="Pratos do restaurante japonês vegano"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px auto",
          display: "block",
          borderRadius: "8px",
        }}
      />
      {/* Carrossel de Imagens */}
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <img
          src={temakiVegano}
          alt="Temaki Vegano"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={missoLamenVegano}
          alt="Missô Lámen Vegano"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={tofu}
          alt="Tofu"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={yakisobaVegano}
          alt="Yakisoba Vegano"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={udonVegano}
          alt="Udon Vegano"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  </Layout>
);

export default AboutPage;
