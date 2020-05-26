const listaPessoa1 = [];
const listaPessoa2 = [];

class ComparacaoObjetos{
    constructor(){
        this.nome = document.getElementById("txtNome");
        this.nome2 = document.getElementById("txtNome2");
        this.idade = document.getElementById("txtIdade");
        this.idade2 = document.getElementById("txtIdade2");
        this.altura = document.getElementById("txtAltura");
        this.altura2 = document.getElementById("txtAltura2");
        this.peso = document.getElementById("txtPeso");
        this.peso2 = document.getElementById("txtPeso2");
        this.btnComparacao = document.getElementById("btnComparacao");
        this.btnAdicionar = document.getElementById("btnAdicionar");
        this.botao();
    }

    botao(){
        this.btnComparacao.onclick = event => this.compararPessoas();
        this.btnAdicionar.onclick = event => this.adicionar();
    }

    adicionar(){
        const pessoa1 = {
            nome: this.nome.value,
            idade: parseFloat(this.idade.value),
            altura: parseFloat(this.altura.value),
            peso: parseFloat(this.peso.value)
        }

        listaPessoa1.push(pessoa1);
        console.log(listaPessoa1);

        const pessoa2 = {
            nome2: this.nome2.value,
            idade2: parseFloat(this.idade2.value),
            altura2: parseFloat(this.altura2.value),
            peso2: parseFloat(this.peso2.value)
        }
        listaPessoa2.push(pessoa2);
        console.log(listaPessoa2);
    }

    compararPessoas(){
        if(listaPessoa1.idade > listaPessoa2.idade2 && listaPessoa1.altura > listaPessoa2.altura2 && listaPessoa1.peso < listaPessoa2.peso2){
            document.getElementById("divPai").innerHTML += `
            <label>
            Nome: ${listaPessoa1.nome}<br>
            Idade: ${listaPessoa1.idade}<br>
            Altura: ${listaPessoa1.altura}<br>
            Peso: ${listaPessoa1.peso}
            </label>
            `
        }
    }

}
new ComparacaoObjetos();