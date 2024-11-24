import React from "react";
import Layout from "../components/layout";
import sushiVegano from "../images/sushi-vegano.jpg";
import temakiShimeji from "../images/temaki-shimeji.jpg";
import "../styles/menu.css"; // Certifique-se de criar este arquivo CSS
import { StaticImage } from "gatsby-plugin-image"; // Para a imagem do logo

const MenuPage = () => (
  <Layout>
    <div className="menu-container">
      {/* Coluna da Esquerda: Imagem 1 */}
      <div className="menu-image">
        <img src={sushiVegano} alt="Sushi Vegano" />
      </div>

      {/* Conteúdo do Menu */}
      <div className="menu-content">
        <h1>Nosso Menu</h1>
        <p>Desfrute de uma seleção especial de pratos veganos inspirados na culinária japonesa. Todos os pratos estão disponíveis também como marmitex com diferentes tamanhos para sua conveniência.</p>
        
        <h2>Entradas</h2>
        <ul>
          <li>Edamame - R$18 (Marmitex: Pequeno R$25 / Grande R$30)</li>
          <li>Gyoza Vegano (4 unidades) - R$25 (Marmitex: Pequeno R$35 / Grande R$40)</li>
          <li>Sunomono - R$20 (Marmitex: Pequeno R$25 / Grande R$30)</li>
        </ul>

        <h2>Sushis e Temakis</h2>
        <ul>
          <li>Sushi de Avocado - R$30 (8 unidades) (Marmitex: Pequeno R$40 / Grande R$45)</li>
          <li>Hot Roll Vegano - R$35 (8 unidades) (Marmitex: Pequeno R$45 / Grande R$50)</li>
          <li>Temaki de Shimeji - R$28 (Marmitex: Pequeno R$38 / Grande R$43)</li>
        </ul>

        <h2>Pratos Principais</h2>
        <ul>
          <li>Yakissoba Vegano - R$40 (Marmitex: Pequeno R$50 / Grande R$55)</li>
          <li>Tofu Teriyaki com Legumes - R$42 (Marmitex: Pequeno R$52 / Grande R$57)</li>
          <li>Combo Especial Vegano - R$75 (sushi, hot roll e sashimi vegano) (Marmitex: Pequeno R$90 / Grande R$95)</li>
        </ul>

        <h2>Bebidas</h2>
        <ul>
          <li>Chá Verde Gelado - R$15</li>
          <li>Suco de Laranja Natural - R$12</li>
          <li>Água com Gás - R$8</li>
        </ul>
      </div>

      {/* Coluna da Direita: Imagem 2 */}
      <div className="menu-image">
        <img src={temakiShimeji} alt="Temaki de Shimeji" />
      </div>
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

export default MenuPage;
