import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>404: Página não encontrada</h1>
    <p>
      Parece que você seguiu um rastro de tofu até aqui... mas não encontramos o que você procura! 🥢
    </p>
    <p>
      Que tal voltar ao nosso <a href="/">menu principal</a> e experimentar algo delicioso? 🍣
    </p>

    {/* Logo na parte inferior */}
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <StaticImage
        src="../images/logoclara.png" // Imagem do logo do restaurante
        loading="eager"
        width={200} // Ajuste o tamanho conforme necessário
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Logo do Contra o Filé"
        style={{ marginBottom: "20px" }}
      />
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Página não encontrada" />;

export default NotFoundPage;
