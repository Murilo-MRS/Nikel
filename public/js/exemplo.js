const nome = "Marcelo";
let nome2 = "";
let pessoaDefault = {
  nome: "Marcelo",
  idade: "33",
  trabalho: "Programador",
};
let nomes = ["Marcelo", "Maria", "Pedro"]
let pessoas = [
    {
    nome: "Marcelo",
    idade: "33",
    trabalho: "Programador"
    },
    {
    nome: "Maria",
    idade: "25",
    trabalho: "UX/UI designer"
    }
];

function alterarNome() {
  nome2 = "Maria";
  console.log("valor alterado:");
  console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
  nome2 = novoNome;
  console.log("valor alterado recebendo nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoas(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("--------Imprimiu Pessoas--------")
    pessoas.forEach((item)=>{
        console.log("Nome:")
        console.log(item.nome)

        console.log("Idade:");
        console.log(item.idade);
      
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas()

console.log(pessoas)
adicionarPessoas({
    nome: "Pedro",
    idade: "28",
    trabalho: "Porteiro"
})
console.log(pessoas)

imprimirPessoas()

// console.log(pessoas)

//console.log(pessoas)
//imprimirPessoa(pessoaDefault);
//imprimirPessoa({
//  nome: "Maria",
//  idade: "25",
//  trabalho: "UX/UI designer",
//});

// alterarNome();
// recebeEAlteraNome("Joao");
// recebeEAlteraNome("Maria");