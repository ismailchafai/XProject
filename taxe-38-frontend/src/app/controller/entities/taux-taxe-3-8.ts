import { TypeLocale38Detail } from 'src/app/controller/entities/type-locale-3-8-detail';
import { CategorieLocale } from 'src/app/controller/entities/categorie-locale';
export class TauxTaxe38 {
id!: number;
code: string | undefined;
montantParMetreCarre: number | undefined;
dateMin: Date | undefined;
dateMax: Date | undefined;
pourcentagePremierRetard: number | undefined;
pourcentageAutreMoisRetard: number | undefined;
typeLocale38Detail: TypeLocale38Detail | undefined;
categorieLocale: CategorieLocale | undefined;
}