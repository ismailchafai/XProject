import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { NotificationRetardDeuxiemeNiveauDetailType38 } from 'src/app/controller/entities/notification-retard-deuxieme-niveau-detail-type-3-8';
import { NotificationRetardDeuxiemeNiveauDetailType38Validator } from 'src/app/controller/validators/notification-retard-deuxieme-niveau-detail-type-3-8.validator';

@Injectable({ providedIn: 'root' })
export class NotificationRetardDeuxiemeNiveauDetailType38Service {
  private readonly api = environment.apiUrl + "notificationretarddeuxiemeniveaudetailtype38";
  private _item!: NotificationRetardDeuxiemeNiveauDetailType38 | undefined;
  private _items!: Array<NotificationRetardDeuxiemeNiveauDetailType38>;
  private _pagination!: Pagination<NotificationRetardDeuxiemeNiveauDetailType38>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetailType38>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<NotificationRetardDeuxiemeNiveauDetailType38>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetailType38>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<NotificationRetardDeuxiemeNiveauDetailType38>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<NotificationRetardDeuxiemeNiveauDetailType38>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<NotificationRetardDeuxiemeNiveauDetailType38>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<NotificationRetardDeuxiemeNiveauDetailType38>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<NotificationRetardDeuxiemeNiveauDetailType38>>(`${this.api}/all`, this.items);
  }

  public delete(dto: NotificationRetardDeuxiemeNiveauDetailType38) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<NotificationRetardDeuxiemeNiveauDetailType38>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByTypeLocale38Id(id: number){
    return this.http.delete<number>(`${this.api}/typelocale38/${id}`);
  }

  public findByTypeLocale38Id(id: number){
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetailType38>>(`${this.api}/typelocale38/${id}`);
  }

  //------------- getters and setters -----------------------
  public get itemIsNull(): boolean {
    return this._item == undefined
  }

  public get items() {
    if (this._items == undefined)
      this._items = [];
    return this._items;
  }

  get pagination() {
    if (this._pagination == null)
      this._pagination = new Pagination();
    return this._pagination;
  }

  set pagination(value) {
    this._pagination = value;
  }

  public set items(value) {
    this._items = value;
  }

  public get item(): NotificationRetardDeuxiemeNiveauDetailType38 {
    if (this._item == null)
      this._item = new NotificationRetardDeuxiemeNiveauDetailType38();
    return this._item;
  }

  public set item(value: NotificationRetardDeuxiemeNiveauDetailType38 | undefined) {
    this._item = value;
  }

  public get createdItemAfterReturn() {
    let created = {
      item: this.item,
      created: this.toReturn()
    }
    this.returnUrl = undefined
    this.item = undefined
    return created
  }
}

