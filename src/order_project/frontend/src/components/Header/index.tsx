import {Container, Content} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedido dos clientes</h2>
        </div>
        <h1 className='logo'>Order App</h1>
      </Content>
    </Container>
  );
}
