/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/layout.css";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {/* Cabeçalho */}
      <header>
        <h1>{data.site.siteMetadata?.title || `Restaurante Vegano`}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>

      {/* Rodapé */}
      <footer>
        <p>
          © {new Date().getFullYear()} Restaurante Vegano Japonês· Desenvolvido com{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
