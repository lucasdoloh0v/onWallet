import logo from "../../assets/logo.svg";
import { Container, ContainerLogo, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <ContainerLogo>
          <img src={logo} alt="onWallet icon" />
          <h1>onWallet</h1>
        </ContainerLogo>
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}
