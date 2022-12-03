export enum Niveau {
    JUNIOR,
    SENIOR,
    EXPERT
}

export class Equipe {
    idEquipe !: number;
    nomEquipe !: string;
    niveau !: Niveau;
}