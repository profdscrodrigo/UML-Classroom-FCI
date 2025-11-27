package service;

import java.sql.*;

public class BancoDados {
    private final String URL_BD = System.getenv().getOrDefault("DB_URL",
            "jdbc:mysql://localhost:3306/sistema_drones?useSSL=false&serverTimezone=UTC");
    private final String USUARIO_BD = System.getenv().getOrDefault("DB_USER", "root");
    private final String SENHA_BD = System.getenv().getOrDefault("DB_PASS", "1234");

    public Connection obterConexao() throws SQLException {
        return DriverManager.getConnection(URL_BD, USUARIO_BD, SENHA_BD);
    }

    public void inicializarEsquema() throws SQLException {
        String sqlClientes = "CREATE TABLE IF NOT EXISTS clientes (" +
                "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
                "nome VARCHAR(255), cpf VARCHAR(20), telefone VARCHAR(50), " +
                "email VARCHAR(255) UNIQUE, senha VARCHAR(255)" +
                ") ENGINE=InnoDB";

        String sqlEnderecos = "CREATE TABLE IF NOT EXISTS enderecos (" +
                "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
                "cliente_id BIGINT, rua VARCHAR(255), numero INT, cidade VARCHAR(255), estado VARCHAR(255), cep VARCHAR(50), " +
                "FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE" +
                ") ENGINE=InnoDB";

        String sqlEntregas = "CREATE TABLE IF NOT EXISTS entregas (" +
            "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
            "peso DOUBLE, cliente_id BIGINT, destino_rua VARCHAR(255), destino_numero INT, destino_cidade VARCHAR(255), destino_estado VARCHAR(255), destino_cep VARCHAR(50), " +
            "status VARCHAR(50), pagamento_status VARCHAR(50), " +
            "FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE SET NULL" +
            ") ENGINE=InnoDB";

        String sqlDrones = "CREATE TABLE IF NOT EXISTS drones (" +
            "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
            "capacidade DOUBLE, status VARCHAR(50), bateria INT" +
            ") ENGINE=InnoDB";

        String sqlPagamentos = "CREATE TABLE IF NOT EXISTS pagamentos (" +
            "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
            "valor DOUBLE, metodo VARCHAR(50), status VARCHAR(50), data TIMESTAMP, entrega_id BIGINT" +
            ") ENGINE=InnoDB";

        try (Connection conexao = obterConexao(); Statement st = conexao.createStatement()) {
            st.execute(sqlClientes);
            st.execute(sqlEnderecos);
            st.execute(sqlEntregas);
            st.execute(sqlDrones);
            st.execute(sqlPagamentos);
            System.out.println("Esquema inicializado/validado no MySQL.");
        }
    }
}
