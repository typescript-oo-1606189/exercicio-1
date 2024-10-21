function apresentar(nome, idade) {
    return "Meu nome \u00E9 ".concat(nome, " e minha idade \u00E9 ").concat(idade);
}
var texto = "Vamos para mais uma aula Typescript com Orientação a Objetos";
var numeroDaAula = 4;
var vamosAprenderTs = true;
var meuEndereco = {
    rua: "Rua qualquer",
    numero: 25,
    bairro: "Centro"
};
console.log("Texto: ", texto);
console.log("NumerodaAula: ", numeroDaAula);
console.log("Vamosaprenderts: ", vamosAprenderTs);
console.log(apresentar("Jeff", 29));
