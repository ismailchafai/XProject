import { Trim } from 'src/app/controller/entities/trim';
export class NotificationRetardDeuxiemeNiveauDetail {
id!: number;
code: string | undefined;
trim: Trim | undefined;
montantBase: number | undefined;
montantRetardPremierMois: number | undefined;
montantRetardAutreMois: number | undefined;
montantTotal: number | undefined;
}