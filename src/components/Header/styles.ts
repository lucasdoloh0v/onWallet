import { styled } from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const ContainerLogo = styled.div`
  max-width: 190px;
  width: 100%;
  display: flex;
  align-items: center;

  color: var(--shape);

  img {
    width: 40px;
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
