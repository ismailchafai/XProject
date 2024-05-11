import { Redevable } from 'src/app/controller/entities/redevable';
import { Locale } from 'src/app/controller/entities/locale';
import { Trim } from 'src/app/controller/entities/trim';
import { Taxe38Detail } from 'src/app/controller/entities/taxe-3-8-detail';
export class Taxe38 {
id!: number;
code: string | undefined;
redevable: Redevable | undefined;
locale: Locale | undefined;
anne: number | undefined;
trim: Trim | undefined;
datePresentaion: Date | undefined;
nombreMoisRetard: number | undefined;
montantBase: number | undefined;
montantRetardPremeirMois: number | undefined;
montantTotal: number | undefined;
taxe38Details: Array<Taxe38Detail> | undefined;
}