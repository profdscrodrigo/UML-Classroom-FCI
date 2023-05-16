function Escrever(texto) {
    document.writeln(texto.fontcolor("green"));
}


function searchProducts(form) {
    const searchQuery = form.searchQuery.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    let foundProducts = 0;
  
    produtos.forEach((produto) => {
      const name = produto.querySelector('a').textContent.toLowerCase();
      if (name.includes(searchQuery)) {
        produto.style.display = 'block';
        foundProducts++;
      } else {
        produto.style.display = 'none';
      }
    });
  
    const h1 = document.querySelector('.produtos');
    if (foundProducts === 0) {
      h1.textContent = `Não encontramos produtos correspondentes a "${searchQuery}"`;
      h1.style.fontSize = "24px"; 
      h1.style.color = "white"; 
    } else {
      h1.textContent = `Produtos correspondentes a "${searchQuery}":`;
    }
  
    form.reset();
    return false;
  }

window.onload = function() {

   
  window.onscroll = function() {fixHeader()};

  const header = document.querySelector(".cabecalho");
  const headerHeight = header.offsetTop;
  
  function fixHeader() {
    if (window.pageYOffset > headerHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  

    function typeWriter(elementSelector) {
      const elemento = document.querySelector(elementSelector);
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 50 * i);
      });
    }
  
    const h1 = '.titulo-body'; 
    typeWriter(h1);
  
    const precoProduto = 4299; 
    const freteProduto = 10; 
  
    const precoTotal = document.querySelector('.contador-total');
    const freteTotal = document.querySelector('.frete-produto');
    const parcelaTotal = document.querySelector('.parcela-produto');

  
    function atualizarValores() {
      const qtdParcelasMinima = 6
      const qtdProdutos = document.querySelector('input[type="number"]').value;
      const valorTotal = (precoProduto + freteProduto) * qtdProdutos;
      const valorParcelado = valorTotal / qtdParcelasMinima;
  
      precoTotal.textContent = `Total: R$${valorTotal.toFixed(2).replace('.', ',')}`;
      freteTotal.textContent = `Frete: R$${freteProduto.toFixed(2).replace('.', ',')}`;
      parcelaTotal.textContent = `${qtdParcelasMinima}x de R$${valorParcelado.toFixed(2).replace('.', ',')} sem juros`;
      
    }
  
    // Adiciona evento de atualização de valores ao input de parcelas
    const inputTotal = document.querySelector('input[type="number"]');
    inputTotal.addEventListener('change', atualizarValores);

    // Inicializa valores ao carregar a página
    atualizarValores();
  };
  