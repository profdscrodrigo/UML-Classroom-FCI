package service.interfaces;

import java.util.List;

public interface IRepositorio<T> {
    void salvar(T entidade) throws Exception;
    T buscarPorId(Long id) throws Exception;
    List<T> buscarTodos() throws Exception;
    void deletar(Long id) throws Exception;
}
