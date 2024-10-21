function apresentar(nome: string, idade: number): string {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

const texto: string = "Vamos para mais uma aula Typescript com Orientação a Objetos";
const numeroDaAula: number = 4;
const vamosAprenderTs: boolean = true;

type Endereco = {
  rua: string,
  numero: number,
  bairro: string
}
const meuEndereco: Endereco = {
  rua: "Rua qualquer",
  numero: 25,
  bairro: "Centro"
}

console.log("Texto: ", texto);
console.log("NumerodaAula: ", numeroDaAula);
console.log("Vamosaprenderts: ", vamosAprenderTs);
console.log(apresentar("Jeff", 29));