// types
// interfaces
/*
interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNortuna: boolean;
}

interface ICanino extends IAnimal{
    porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: "cachorro",
    tipo: "terrestre",
    porte: "medio"
}
*/

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});