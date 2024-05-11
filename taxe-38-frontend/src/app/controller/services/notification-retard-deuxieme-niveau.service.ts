import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { NotificationRetardDeuxiemeNiveau } from 'src/app/controller/entities/notification-retard-deuxieme-niveau';
import { NotificationRetardDeuxiemeNiveauValidator } from 'src/app/controller/validators/notification-retard-deuxieme-niveau.validator';

@Injectable({ providedIn: 'root' })
export class NotificationRetardDeuxiemeNiveauService {
  private readonly api = environment.apiUrl + "notificationretarddeuxiemeniveau";
  private _item!: NotificationRetardDeuxiemeNiveau | undefined;
  private _items!: Array<NotificationRetardDeuxiemeNiveau>;
  private _pagination!: Pagination<NotificationRetardDeuxiemeNiveau>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveau>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<NotificationRetardDeuxiemeNiveau>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveau>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<NotificationRetardDeuxiemeNiveau>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<NotificationRetardDeuxiemeNiveau>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<NotificationRetardDeuxiemeNiveau>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<NotificationRetardDeuxiemeNiveau>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<NotificationRetardDeuxiemeNiveau>>(`${this.api}/all`, this.items);
  }

  public delete(dto: NotificationRetardDeuxiemeNiveau) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<NotificationRetardDeuxiemeNiveau>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByLocaleId(id: number){
    return this.http.delete<number>(`${this.api}/locale/${id}`);
  }

  public findByLocaleId(id: number){
    return this.http.get<Array<NotificationRetardDeuxiemeNiveau>>(`${this.api}/locale/${id}`);
  }
  public deleteByRedevableId(id: number){
    return this.http.delete<number>(`${this.api}/redevable/${id}`);
  }

  public findByRedevableId(id: number){
    return this.http.get<Array<NotificationRetardDeuxiemeNiveau>>(`${this.api}/redevable/${id}`);
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

  public get item(): NotificationRetardDeuxiemeNiveau {
    if (this._item == null)
      this._item = new NotificationRetardDeuxiemeNiveau();
    return this._item;
  }

  public set item(value: NotificationRetardDeuxiemeNiveau | undefined) {
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

