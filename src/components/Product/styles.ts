import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end; //joga os itens lá pro final
  align-items: center;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a { // Segundo href apenas
      padding-left: 10px; //espaçamento para esqueda
      margin-left: 10px; 
      border-left: 1px solid var(--color-border);
    }
  }
`;

//painel 
export const Panel = styled.div`
  background: var(--color-white);//terá cor  de fundo branco
  box-shadow: var(--panel-shadow); // box shadow que fica em volta do painel 

  display: grid;
  grid-template-columns: 65fr 35fr; //tamanho das colunas 
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

//camiseta
export const Gallery = styled.div`
  display: flex;
  align-items: center; //centralizando 
  justify-content: center; //centralizando
  height: 530px; //altura da imagem

  > img {
    height: 73%;
  }
`;

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }
    .title {
      font-size: 16px;
      color: var(--color-black);
    }
    .description {
      margin-top: 5px;
      font-size: 14px;
      color: var(--color-gray);
      line-height: 19px;
    }
  }
  > a {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

//descrição
export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;
