import { Locale } from 'src/app/controller/entities/locale';
import { Redevable } from 'src/app/controller/entities/redevable';
export class NotificationRetardDeuxiemeNiveau {
id!: number;
code: string | undefined;
locale: Locale | undefined;
redevable: Redevable | undefined;
anne: number | undefined;
montantBase: number | undefined;
montantRetardPremierMois: number | undefined;
montantRetardAutreMois: number | undefined;
montantTotal: number | undefined;
}