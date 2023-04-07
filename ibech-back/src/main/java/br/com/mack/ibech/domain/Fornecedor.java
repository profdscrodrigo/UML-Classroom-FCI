package br.com.mack.ibech.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.br.CNPJ;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.mack.ibech.domain.dtos.FornecedorDTO;
import br.com.mack.ibech.domain.enums.Perfil;

@Entity
public class Fornecedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	@CNPJ
	@Column(unique = true)
	private String cnpj;
	@Column(unique = true)
	private String email;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataCriacao = LocalDate.now();
	
	public Fornecedor() {
	}
	
	public Fornecedor(Integer id, String nome, @CNPJ String cnpj, String email) {
		super();
		this.id = id;
		this.nome = nome;
		this.cnpj = cnpj;
		this.email = email;
	}

	public Fornecedor(FornecedorDTO dto) {
		super();
		this.id = dto.getId();
		this.nome = dto.getNome();
		this.cnpj = dto.getCnpj();
		this.email = dto.getEmail();
		this.dataCriacao = dto.getDataCriacao();
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
