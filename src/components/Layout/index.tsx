import React from "react";

import Product from "../Product";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container> {/* aqui é o tamanho da pagína */}
      <Wrapper> {/* aqui é o conteudo de dentro */}
        <Product /> {/* aqui será o produto */} 
      </Wrapper>
    </Container>
  );
};

export default Layout;
