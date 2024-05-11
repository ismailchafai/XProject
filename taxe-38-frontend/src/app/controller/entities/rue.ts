import { Quartier } from 'src/app/controller/entities/quartier';
export class Rue {
id!: number;
code: string | undefined;
libelle: string | undefined;
quartier: Quartier | undefined;
}