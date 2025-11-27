package service;

public class ValidadorEntrada {

    public static boolean senhaValida(String senha) {
        if (senha == null) return false;
        int len = senha.length();
        return len >= 6 && len <= 12;
    }

    public static boolean cepValido(String cep) {
        if (cep == null) return false;
        return cep.matches("^\\d{5}-?\\d{3}$");
    }

    public static boolean cpfValido(String cpf) {
        if (cpf == null) return false;
        String s = cpf.replaceAll("\\D", "");
        if (s.length() != 11) return false;
        if (s.matches("^(\\d)\\1{10}$")) return false;
        try {
            int[] digitos = new int[11];
            for (int i = 0; i < 11; i++) digitos[i] = Character.getNumericValue(s.charAt(i));

            int soma = 0;
            for (int i = 0; i < 9; i++) soma += digitos[i] * (10 - i);

            int r = soma % 11;
            int dv1 = (r < 2) ? 0 : 11 - r;
            if (dv1 != digitos[9]) return false;

            soma = 0;
            for (int i = 0; i < 10; i++) soma += digitos[i] * (11 - i);

            r = soma % 11;
            int dv2 = (r < 2) ? 0 : 11 - r;
            
            return dv2 == digitos[10];
        } catch (Exception e) {
            return false;
        }
    }
}
