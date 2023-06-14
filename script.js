class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }


class Produto{
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
       
     }

    mostrarAtributos() {
        try {
          return this.mostrarDados();
        } catch (error) {
          return error
        }
      }
    
    
     mostrarDados(){
        if (this.nome != "" && this.data_cadastro != "" && this.descricao != "" && this.preco != ""){
        return `
        <div class="produto1-card">
        <div class = "azul">${this.nome}</div>
        <div class = "azul">${this.data_cadastro}</div>
        <div class = "azul">${this.descricao}</div>
        <div class = "azul">${this.preco}</div>
        </div>
        `;
     } else {
        throw new MeuErro("Mensagem de erro");
     }
}
     
}

class ProdutoDestaque extends Produto{
    constructor(nome, data_cadastro, descricao, preco, produto_destaque){
        super(nome, data_cadastro, descricao, preco);
        this.produto_destaque = produto_destaque;
    }

    mostrar_ProdutoDestaque(){
        if (this.nome != "" && this.data_cadastro != "" && this.descricao != "" && this.preco != ""){
        return `
        <div class="produto2-card">
        <img src = "${this.produto_destaque}" class = "quadro">
        <div class = "azul">${this.nome}</div>
        <div class = "azul">${this.data_cadastro}</div>
        <div class = "azul">${this.descricao}</div>
        <div class = "azul">${this.preco}</div>
        </div>
        `;
        
        //return this.nome + this.DatadeCadastro + this.Descricao + this.preco + ProdutoDestaque;
    } else {
        throw new MeuErro("Mensagem de erro");
     }
}
}



const produto1 = new ProdutoDestaque ("", "08/08/2006", "13579", "25.00", "https://cf.shopee.com.br/file/6306627181d6900a96d8c4165c44dd8d");
console.log(produto1.mostrar_ProdutoDestaque());
const div1 = document.getElementById('produto_destaque');
div1.insertAdjacentHTML('beforeend', produto1.mostrar_ProdutoDestaque());

const produto1s = new Produto ("Quadro Monalisa", "08/08/2006", "13579", "25.00");
console.log(produto1s.mostrarDados());
const div1s = document.getElementById('lista_produtos');
div1s.insertAdjacentHTML('beforeend', produto1s.mostrarDados());
//

const produto2 = new ProdutoDestaque ("Quadro", "09/09/2007", "97531", "35.00", "https://i.pinimg.com/236x/2d/cf/74/2dcf74e6881d0d0865eb2441b4445ee8.jpg");
console.log(produto2.mostrar_ProdutoDestaque());
const div2 = document.getElementById('produto_destaque');
div2.insertAdjacentHTML('afterbegin', produto2.mostrar_ProdutoDestaque());

const produto2s = new Produto ("Quadro", "09/09/2007", "97531", "35.00");
console.log(produto2s.mostrarDados());
const div2s = document.getElementById('lista_produtos');
div2s.insertAdjacentHTML('afterbegin', produto2s.mostrarDados());
//

const produto3 = new ProdutoDestaque ("Gato do café", "07/07/2007", "2468", "50.00", "https://cdn.awsli.com.br/300x300/579/579637/produto/77592776/cc9cbacc14.jpg");
console.log(produto3.mostrar_ProdutoDestaque());
const div3 = document.getElementById('produto_destaque');
div3.insertAdjacentHTML('afterbegin', produto3.mostrar_ProdutoDestaque());

const produto3s = new Produto ("Gatinho do café", "07/07/2007", "2468", "50.00");
console.log(produto3s.mostrarDados());
const div3s = document.getElementById('lista_produtos');
div3s.insertAdjacentHTML('afterbegin', produto3s.mostrarDados());
//

const produto4 = new ProdutoDestaque ("Livro: heartstopper", "05/05/2005", "0000", "55.00", "https://img.travessa.com.br/livro/BA/0c/0c9ef803-a970-45cd-a403-ccd8ac0e5f09.jpg");
console.log(produto4.mostrar_ProdutoDestaque());
const div4 = document.getElementById('produto_destaque');
div4.insertAdjacentHTML('afterbegin', produto4.mostrar_ProdutoDestaque());

const produto4s = new Produto ("Livro: heartstopper", "05/05/2005", "0000", "55.00");
console.log(produto4s.mostrarDados());
const div4s = document.getElementById('lista_produtos');
div4s.insertAdjacentHTML('afterbegin', produto4s.mostrarDados());
//

const produto5 = new ProdutoDestaque ("Livro: Minha versão de você", "05/05/2005", "0000", "55.00", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c936f1de-126e-4d6d-9e94-b442a1de13a7.__CR0,0,1250,1250_PT0_SX300_V1___.png");
console.log(produto5.mostrar_ProdutoDestaque());
const div5 = document.getElementById('produto_destaque');
div5.insertAdjacentHTML('afterbegin', produto5.mostrar_ProdutoDestaque());

const produto5s = new Produto ("Livro: Minha versão de você", "05/05/2005", "0000", "55.00");
console.log(produto5s.mostrarDados());
const div5s = document.getElementById('lista_produtos');
div5s.insertAdjacentHTML('afterbegin', produto5s.mostrarDados());



