class Produto{
    constructor(nome, DatadeCadastro, Descricao, preco){
        this.nome = nome;
        this.DatadeCadastro = DatadeCadastro;
        this.Descricao = Descricao;
        this.preco = preco;
       
     }
    
     mostrarDados(){
        returnn `
        <div class = "azul">${this.nome}</div>
        <div class = "azul">${this.DatadeCadastro}</div>
        <div class = "azul">${this.Descrica}</div>
        <div class = "azul">${this.preco}</div>

        `;
     }

}


class ProdutoDestaque extends Produto{
    constructor(nome, DatadeCadastro, Descricao, preco){
        super(nome, DatadeCadastro, Descricao, preco);
        this.produtoDestaque = produtoDestaque;
    }

    mostrarProDes(){
        returnn `
        <img src = "${this.produtoDestaque}">
        <div class = "azul">${this.nome}</div>
        <div class = "azul">${this.DatadeCadastro}</div>
        <div class = "azul">${this.Descrica}</div>
        <div class = "azul">${this.preco}</div>

        `;
        
        //return this.nome + this.DatadeCadastro + this.Descricao + this.preco + ProdutoDestaque;
    }
}

const produto1 = new ProdutoDestaque ("canecaGato", "08/08/2006", "13579", "25.00", "https://m.media-amazon.com/images/I/614MhCvi9FL._AC_SX569_.jpg");
console.log(produto1.mostrarProDes);
const div1 = document.getElementById("Produto-destaque");
div1.insertAdjacentElement("afterbegin", mostrarProDes());

const produto2 = new ProdutoDestaque ("bolsagato", "09/09/2007", "97531", "35.00", "https://images.tcdn.com.br/img/img_prod/582257/bolsa_necessaire_gatos_2153_1_c178010bef628fae56d368295085b3a6.jpg");
console.log(produto2.mostrarProDes);
const div2 = document.getElementById("Produto-destaque");
div2.insertAdjacentElement("afterbegin", mostrarProDes());

const produto3 = new ProdutoDestaque ("quadrogatomonalisa", "07/07/2007", "2468", "50.00", "https://img.elo7.com.br/product/original/15084EF/quadro-gato-monalisa-com-paspatur-quadro.jpg");
console.log(produto3.mostrarProDes);
const div3 = document.getElementById("Produto-destaque");
div3.insertAdjacentElement("afterbegin", mostrarProDes());

const produto4 = new ProdutoDestaque ("quadro2gato", "05/05/2005", "0000", "55.00", "https://m.media-amazon.com/images/I/513XIEcFxZL._AC_UL400_.jpg");
console.log(produto4.mostrarProDes);
const div4 = document.getElementById("Produto-destaque");
div4.insertAdjacentElement("afterbegin", mostrarProDes());


