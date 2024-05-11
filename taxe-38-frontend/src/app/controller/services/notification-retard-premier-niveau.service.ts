import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { NotificationRetardPremierNiveau } from 'src/app/controller/entities/notification-retard-premier-niveau';
import { NotificationRetardPremierNiveauValidator } from 'src/app/controller/validators/notification-retard-premier-niveau.validator';

@Injectable({ providedIn: 'root' })
export class NotificationRetardPremierNiveauService {
  private readonly api = environment.apiUrl + "notificationretardpremierniveau";
  private _item!: NotificationRetardPremierNiveau | undefined;
  private _items!: Array<NotificationRetardPremierNiveau>;
  private _pagination!: Pagination<NotificationRetardPremierNiveau>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<NotificationRetardPremierNiveau>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<NotificationRetardPremierNiveau>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<NotificationRetardPremierNiveau>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<NotificationRetardPremierNiveau>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<NotificationRetardPremierNiveau>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<NotificationRetardPremierNiveau>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<NotificationRetardPremierNiveau>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<NotificationRetardPremierNiveau>>(`${this.api}/all`, this.items);
  }

  public delete(dto: NotificationRetardPremierNiveau) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<NotificationRetardPremierNiveau>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByLocaleId(id: number){
    return this.http.delete<number>(`${this.api}/locale/${id}`);
  }

  public findByLocaleId(id: number){
    return this.http.get<Array<NotificationRetardPremierNiveau>>(`${this.api}/locale/${id}`);
  }
  public deleteByRedevableId(id: number){
    return this.http.delete<number>(`${this.api}/redevable/${id}`);
  }

  public findByRedevableId(id: number){
    return this.http.get<Array<NotificationRetardPremierNiveau>>(`${this.api}/redevable/${id}`);
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

  public get item(): NotificationRetardPremierNiveau {
    if (this._item == null)
      this._item = new NotificationRetardPremierNiveau();
    return this._item;
  }

  public set item(value: NotificationRetardPremierNiveau | undefined) {
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

