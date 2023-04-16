import text from '../../assets/images/text.svg';
import {Container, Content} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedido dos clientes</h2>
        </div>
        <img src={text} alt="Waiter App logo"/>
      </Content>
    </Container>
  );
}
