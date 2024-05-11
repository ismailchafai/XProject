import { Locale38Detail } from 'src/app/controller/entities/locale-3-8-detail';
import { TauxTaxe38 } from 'src/app/controller/entities/taux-taxe-3-8';
import { Taxe38 } from 'src/app/controller/entities/taxe-3-8';
export class Taxe38Detail {
id!: number;
code: string | undefined;
montantParMetreCarre: number | undefined;
locale38Detail: Locale38Detail | undefined;
tauxTaxe38: TauxTaxe38 | undefined;
montantBase: number | undefined;
montantRetardPremierMois: number | undefined;
montantRetardAutreMois: number | undefined;
taxe38: Taxe38 | undefined;
}