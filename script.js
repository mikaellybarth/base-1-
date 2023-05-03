class Produto{
    constructor(nome, DatadeCadastro, Descricao, preco){
        this.nome = nome;
        this.DatadeCadastro = DatadeCadastro;
        this.Descricao = Descricao;
        this.preco = preco;
       
     }
    
     mostrarDados(){
        //return this.nome + this.DatadeCadastro + this.Descricao + this.preco;
          return `
          <div>${this.nome}</div>
          <div>${this.DatadeCadastro}</div>
          <div>${this.Descricao}</div>
          <div>${this.preco}</div>
          
          `;
     }

}


class ProdutoDestaque extends Produto{
    constructor(nome, DatadeCadastro, Descricao, preco, produto_Destaque){
        super(nome, DatadeCadastro, Descricao, preco);
       this.produto_Destaque = produto_Destaque;
    }

    mostrarProdutos(){
        //return this.nome + this.DatadeCadastro + this.Descricao + this.preco + this.produto_Destaque;

        return `
        <div>${this.nome}</div>
        <div>${this.DatadeCadastro}</div>
        <div>${this.Descricao}</div>
        <div>${this.preco}</div>
        <div>${this.produto_Destaque}</div>
        `;
    }
}

const produto = new ProdutoDestaque("caneca gato ", "08/08/2013 ", "caneca", 30.00, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.megashopsul.com.br%2Fcasa%2F5337-caneca-gato-preto-ceramica-com-tampa-cat-lovers.html&psig=AOvVaw1IpW3F05GxFda7oaVFPKBb&ust=1683222610022000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjkv4bb2f4CFQAAAAAdAAAAABAE");
console.log(produto.mostrarProdutos());

const div = document.getElementById("produto-destaque");
div.insertAdjacentHTML("afterbegin", produto.mostrarProdutos());

const div2 = document.getElementById("lista-produtos");
div.insertAdjacentHTML("afterbegin", );


