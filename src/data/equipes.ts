export interface Equipe {
    id_equipe: string;
    nom_equipe: string;
}

const equipes : Equipe[] = [
    {
        id_equipe: 'EQU0001',
        nom_equipe: "Philadelphia 76ers"
    },
    {
        id_equipe: 'EQU0002',
        nom_equipe: "Phoenix Suns"
    }
];

export const getEquipes = () => equipes;

export const getEquipe = (id: string) => equipes.find(e => e.id_equipe === id);