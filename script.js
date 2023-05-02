class Produto{
    constructor(nome, DatadeCadastro, Descricao, preco){
        this.nome = nome;
        this.DatadeCadastro = DatadeCadastro;
        this.Descricao = Descricao;
        this.preco = preco;
       
     }
    
     mostrarProdutos(){
        return this.nome + this.DatadeCadastro + this.Descricao + this.preco

     }

}


class ProdutoDestaque extends Produto{
    constructor(nome, DatadeCadastro, Descricao, preco){
        super(nome, DatadeCadastro, Descricao, preco);
       // this.quantidade_de_aulas = quantidade_de_aulas;
    }
}