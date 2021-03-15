import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";
import { ContainerContextProvider } from "./context/Container.context";
import { Container } from "./components/Container";

export function App() {
  return (
    <ContainerContextProvider>
      <Container />
    </ContainerContextProvider>
  );
}
