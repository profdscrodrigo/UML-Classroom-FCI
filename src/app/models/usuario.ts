export interface Usuario {
    id?: any;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;
    dataNascimento: Date;
    sexo: string;
}