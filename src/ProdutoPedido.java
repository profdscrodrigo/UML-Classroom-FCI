public class ProdutoPedido {
    private int id;
    private int idPedido;
    private int idProduto;
    private int quantidade;

    public ProdutoPedido(int id, int idPedido, int idProduto, int quantidade) {
        this.id = id;
        this.idPedido = idPedido;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
    }

    public int getId() { return id; }
    public int getIdPedido() { return idPedido; }
    public int getIdProduto() { return idProduto; }
    public int getQuantidade() { return quantidade; }
}