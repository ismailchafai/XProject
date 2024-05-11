import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { NotificationRetardDeuxiemeNiveauDetail } from 'src/app/controller/entities/notification-retard-deuxieme-niveau-detail';
import { NotificationRetardDeuxiemeNiveauDetailValidator } from 'src/app/controller/validators/notification-retard-deuxieme-niveau-detail.validator';

@Injectable({ providedIn: 'root' })
export class NotificationRetardDeuxiemeNiveauDetailService {
  private readonly api = environment.apiUrl + "notificationretarddeuxiemeniveaudetail";
  private _item!: NotificationRetardDeuxiemeNiveauDetail | undefined;
  private _items!: Array<NotificationRetardDeuxiemeNiveauDetail>;
  private _pagination!: Pagination<NotificationRetardDeuxiemeNiveauDetail>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetail>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<NotificationRetardDeuxiemeNiveauDetail>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetail>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<NotificationRetardDeuxiemeNiveauDetail>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<NotificationRetardDeuxiemeNiveauDetail>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<NotificationRetardDeuxiemeNiveauDetail>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<NotificationRetardDeuxiemeNiveauDetail>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<NotificationRetardDeuxiemeNiveauDetail>>(`${this.api}/all`, this.items);
  }

  public delete(dto: NotificationRetardDeuxiemeNiveauDetail) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<NotificationRetardDeuxiemeNiveauDetail>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByTrimId(id: number){
    return this.http.delete<number>(`${this.api}/trim/${id}`);
  }

  public findByTrimId(id: number){
    return this.http.get<Array<NotificationRetardDeuxiemeNiveauDetail>>(`${this.api}/trim/${id}`);
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

  public get item(): NotificationRetardDeuxiemeNiveauDetail {
    if (this._item == null)
      this._item = new NotificationRetardDeuxiemeNiveauDetail();
    return this._item;
  }

  public set item(value: NotificationRetardDeuxiemeNiveauDetail | undefined) {
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

