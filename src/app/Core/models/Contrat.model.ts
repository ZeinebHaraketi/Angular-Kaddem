export enum Specialite{
    IA,
    RESEAUX,
    CLOUD,
    SECURITE
}

export class Contrat{
    idContrat !: number;
    dateDebutContrat !: Date;
    dateFinContrat !: Date;
    specialite !: string;
    archive !: string;
    montantContrat !: number;
}