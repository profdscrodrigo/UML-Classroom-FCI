import java.sql.*;

public class ProdutoPedidoDAO {

    public void salvar(ProdutoPedido pp) {
        String sql = "INSERT INTO ProdutoPedido (id, idPedido, idProduto, quantidade) VALUES (?, ?, ?, ?)";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, pp.getId());
            stmt.setInt(2, pp.getIdPedido());
            stmt.setInt(3, pp.getIdProduto());
            stmt.setInt(4, pp.getQuantidade());
            stmt.executeUpdate();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar ProdutoPedido: " + e.getMessage());
        }
    }
}