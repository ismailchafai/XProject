import { Ville } from 'src/app/controller/entities/ville';
export class Secteur {
id!: number;
code: string | undefined;
libelle: string | undefined;
ville: Ville | undefined;
}