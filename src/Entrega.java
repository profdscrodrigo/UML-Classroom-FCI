public class Entrega {
    private int id;
    private int idPedido;
    private int idDrone;
    private String endereco;

    public Entrega(int id, int idPedido, int idDrone, String endereco) {
        this.id = id;
        this.idPedido = idPedido;
        this.idDrone = idDrone;
        this.endereco = endereco;
    }

    public int getId() {
        return id;
    }

    public int getIdPedido() {
        return idPedido;
    }

    public int getIdDrone() {
        return idDrone;
    }

    public String getEndereco() {
        return endereco;
    }
}