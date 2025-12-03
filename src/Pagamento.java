public class Pagamento {

    private int idPagamento;
    private int idPedido;
    private double valorPago;
    private TipoPagamento tipoPagamento;
    private boolean confirmado;

    public Pagamento(int idPagamento, int idPedido, double valorPago, TipoPagamento tipoPagamento) {
        this.idPagamento = idPagamento;
        this.idPedido = idPedido;
        this.valorPago = valorPago;
        this.tipoPagamento = tipoPagamento;
        this.confirmado = false;
    }

    public int getIdPagamento() {
        return idPagamento;
    }

    public int getIdPedido() {
        return idPedido;
    }

    public double getValorPago() {
        return valorPago;
    }

    public TipoPagamento getTipoPagamento() {
        return tipoPagamento;
    }

    public boolean isConfirmado() {
        return confirmado;
    }

    public void confirmar() {
        this.confirmado = true;
    }
}
