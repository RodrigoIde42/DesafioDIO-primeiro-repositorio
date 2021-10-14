// types
// interfaces

interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNortuna: boolean;
}

const animal: IAnimal = {
    nome: "elefante",
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

console.log(animal.executarRugido(50));

const felino: IFelino = {
    nome: "leão",
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    visaoNortuna: true
}