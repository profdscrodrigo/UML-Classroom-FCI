public class Pedido {
    private int id;
    private int idCliente;
    private double valorTotal;

    // Construtor usado ao criar o pedido no sistema
    public Pedido(int id, int idCliente) {
        this.id = id;
        this.idCliente = idCliente;
    }

    // Construtor usado ao reconstruir do banco (DAO)
    public Pedido(int id, int idCliente, double valorTotal) {
        this.id = id;
        this.idCliente = idCliente;
        this.valorTotal = valorTotal;
    }

    public int getId() {
        return id;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }
}