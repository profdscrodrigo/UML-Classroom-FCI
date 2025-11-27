package service;

import java.security.MessageDigest;
import java.util.Base64;

public class UtilitarioSeguranca {

    public static String gerarHash(String senha) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(senha.getBytes());
            return Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao gerar hash da senha", e);
        }
    }

    public static boolean verificarSenha(String hashArmazenado, String senha) {
        if (hashArmazenado == null || senha == null) return false;
        String hashCalculado = gerarHash(senha);
        return hashArmazenado.equals(hashCalculado);
    }
}
