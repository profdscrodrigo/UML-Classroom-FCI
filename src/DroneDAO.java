import java.sql.*;
import java.util.List;
import java.util.ArrayList;


public class DroneDAO {

    public void salvar(Drone d) {
        String sql = "INSERT INTO Drone (id, bateria, capacidadePeso) VALUES (?, ?, ?)";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, d.getIdDrone());
            stmt.setInt(2, d.getBateria());
            stmt.setDouble(3, d.getCapacidadePeso());
            stmt.executeUpdate();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar drone: " + e.getMessage());
        }
    }

    public Drone buscar(int id) {
        String sql = "SELECT * FROM Drone WHERE id = ?";

        try (Connection con = ConnectionFactory.getConnection();
             PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return new Drone(
                        rs.getInt("id"),
                        rs.getInt("bateria"),
                        rs.getDouble("capacidadePeso")
                );
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro ao buscar drone: " + e.getMessage());
        }
        return null;
    }

    public List<Drone> listarDisponiveis() {
        List<Drone> lista = new ArrayList<>();
        String sql = "SELECT * FROM Drone WHERE bateria >= 25";

        try (Connection con = ConnectionFactory.getConnection();
             Statement st = con.createStatement()) {

            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                lista.add(new Drone(
                        rs.getInt("id"),
                        rs.getInt("bateria"),
                        rs.getDouble("capacidadePeso")
                ));
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro ao listar drones: " + e.getMessage());
        }

        return lista;
    }
}