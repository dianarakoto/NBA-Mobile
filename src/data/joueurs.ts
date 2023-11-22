export interface Joueur {
    id_joueur: string
    nom_joueur:string 
    id_equipe:string 
}

const joueurs : Joueur[] = [
    {
        id_joueur: 'JOU0001',
        nom_joueur: "Tyrese Maxey",
        id_equipe: 'EQU0001'
    },
    {
        id_joueur: 'JOU0002',
        nom_joueur: "Tobias Harris",
        id_equipe: 'EQU0001'
    },
    {
        id_joueur: 'JOU0003',
        nom_joueur: "Kevin Durant",
        id_equipe: 'EQU0002'
    }
];
export const getJoueurEquipe = (id_equipe: string) => joueurs.filter((j) => j.id_equipe === id_equipe);
