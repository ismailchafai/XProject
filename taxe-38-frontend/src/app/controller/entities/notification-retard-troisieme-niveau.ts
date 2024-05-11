import { Locale } from 'src/app/controller/entities/locale';
import { Redevable } from 'src/app/controller/entities/redevable';
import { Trim } from 'src/app/controller/entities/trim';
export class NotificationRetardTroisiemeNiveau {
id!: number;
code: string | undefined;
locale: Locale | undefined;
redevable: Redevable | undefined;
anne: number | undefined;
trim: Trim | undefined;
}