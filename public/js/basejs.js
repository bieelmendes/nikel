console.log("Hello World!")

let nome2 = "Gabriel Mendes";

let nomes = ["Gabriel", "Pamela", "Luna", "Zeus"];

let pessoas = [{
    nome:"Gabriel",
    idade: "24",
    trabalho: "Instalador"
},
{
    nome:"Gabriel",
    idade: "24",
    trabalho: "Instalador"
}
];

let pessoa ={
    nome:"Gabriel",
    idade: "24",
    trabalho: "Instalador"
}

function imprimePessoa(pessoa){
    console.log("NOME:");
    console.log(pessoa.nome)
    console.log("IDADE:");
    console.log(pessoa.idade)
    console.log("TRABALHO:");
    console.log(pessoa.trabalho)

}

function alterarNome() {
    nome2 = "Gabriel Mendes";
    console.log("Valor Alterado:");
    console.log(nome2);
}

function nomeAlterado(nvnome){
    nome2 =nvnome;
    console.log("Valor Alterado:");
    console.log(nome2);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimePessoas(){
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

adicionarPessoa({
    nome: "Pamela",
    idade: "22",
    trabalho: "Caixa"
})

imprimePessoas()
//imprimePessoa(pessoa);
//nomeAlterado("Pamela");
//alterarNome();