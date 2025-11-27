package service.interfaces;

import entities.Entrega;
import entities.Cliente;
import java.util.List;

public interface IRepositorioEntrega extends IRepositorio<Entrega> {
    List<Entrega> buscarPorCliente(Cliente cliente) throws Exception;
    List<Entrega> buscarTodos() throws Exception;
}
