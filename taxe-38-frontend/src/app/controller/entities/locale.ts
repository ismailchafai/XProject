import { Rue } from 'src/app/controller/entities/rue';
import { Redevable } from 'src/app/controller/entities/redevable';
import { CategorieLocale } from 'src/app/controller/entities/categorie-locale';
export class Locale {
id!: number;
code: string | undefined;
complementAdresse: string | undefined;
rue: Rue | undefined;
redevable: Redevable | undefined;
categorieLocale: CategorieLocale | undefined;
}