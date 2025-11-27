package service.interfaces;

import entities.Pagamento;
import entities.Entrega;

public interface IRepositorioPagamento extends IRepositorio<Pagamento> {
    void salvar(Pagamento pagamento, Entrega entrega) throws Exception;
}
