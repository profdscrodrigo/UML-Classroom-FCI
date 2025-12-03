import java.sql.*;

public class PagamentoDAO {

    public void salvar(Pagamento pag) {
        String sql = "INSERT INTO Pagamento (idPagamento, idPedido, valorPago, tipoPagamento, confirmado) VALUES (?, ?, ?, ?, ?)";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, pag.getIdPagamento());
            stmt.setInt(2, pag.getIdPedido());
            stmt.setDouble(3, pag.getValorPago());
            stmt.setString(4, pag.getTipoPagamento().name());
            stmt.setBoolean(5, pag.isConfirmado());
            stmt.executeUpdate();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar pagamento: " + e.getMessage());
        }
    }
}