package service.interfaces;

import entities.Cliente;
import java.util.List;

public interface IRepositorioCliente extends IRepositorio<Cliente> {
    Cliente buscarPorEmail(String email) throws Exception;
    List<Cliente> buscarTodos() throws Exception;
}
