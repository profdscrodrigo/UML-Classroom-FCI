package br.com.mack.ibech.domain.dtos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.mack.ibech.domain.Fornecedor;
import br.com.mack.ibech.domain.enums.Perfil;

public class FornecedorDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	protected Integer id;
	@NotNull(message = "O campo NOME é requerido!")
	protected String nome;
	@NotNull(message = "O campo CNPJ é requerido!")
	protected String cnpj;
	@NotNull(message = "O campo E-MAIL é requerido!")
	protected String email;
	@JsonFormat(pattern = "dd/MM/yyyy")
	protected LocalDate dataCriacao = LocalDate.now();

	public FornecedorDTO() {
		super();
	}

	public FornecedorDTO(Fornecedor forn) {
		super();
		this.id = forn.getId();
		this.nome = forn.getNome();
		this.cnpj = forn.getCnpj();
		this.email = forn.getEmail();
		this.dataCriacao = forn.getDataCriacao();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}
	
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	
}
