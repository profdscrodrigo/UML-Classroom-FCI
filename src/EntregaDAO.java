import java.sql.*;

public class EntregaDAO {

    public void salvar(Entrega e) {
        String sql = "INSERT INTO Entrega (id, idPedido, idDrone, endereco) VALUES (?, ?, ?, ?)";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, e.getId());
            stmt.setInt(2, e.getIdPedido());
            stmt.setInt(3, e.getIdDrone());
            stmt.setString(4, e.getEndereco());
            stmt.executeUpdate();

        } catch (Exception ex) {
            throw new RuntimeException("Erro ao salvar entrega: " + ex.getMessage());
        }
    }
}