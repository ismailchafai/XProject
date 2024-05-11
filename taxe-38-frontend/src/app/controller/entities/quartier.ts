import { Secteur } from 'src/app/controller/entities/secteur';
export class Quartier {
id!: number;
code: string | undefined;
libelle: string | undefined;
secteur: Secteur | undefined;
}