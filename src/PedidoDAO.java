import java.sql.*;

public class PedidoDAO {

    public void salvar(Pedido p) {
        String sql = "INSERT INTO Pedido (id, idCliente, valorTotal) VALUES (?, ?, ?)";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, p.getId());
            stmt.setInt(2, p.getIdCliente());
            stmt.setDouble(3, p.getValorTotal());
            stmt.executeUpdate();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar pedido: " + e.getMessage());
        }
    }

    public Pedido buscar(int id) {
        String sql = "SELECT * FROM Pedido WHERE id = ?";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return new Pedido(
                        rs.getInt("id"),
                        rs.getInt("idCliente"),
                        rs.getDouble("valorTotal")
                );
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro ao buscar pedido: " + e.getMessage());
        }
        return null;
    }

    public void atualizarValor(Pedido p) {
        String sql = "UPDATE Pedido SET valorTotal = ? WHERE id = ?";
        try (Connection con = ConnectionFactory.getConnection();
            PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setDouble(1, p.getValorTotal());
            stmt.setInt(2, p.getId());
            stmt.executeUpdate();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao atualizar pedido: " + e.getMessage());
        }
    }


}