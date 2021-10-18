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

// Tag input

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});


// Generic types

function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceALista(['A', 'B ', 'C'], 'D');
*/

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario){
        // redirecionar para área de administração
    }

    // redirecionar para área de usuário
}