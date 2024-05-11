import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Locale38Detail } from 'src/app/controller/entities/locale-3-8-detail';
import { Locale38DetailValidator } from 'src/app/controller/validators/locale-3-8-detail.validator';

@Injectable({ providedIn: 'root' })
export class Locale38DetailService {
  private readonly api = environment.apiUrl + "locale38detail";
  private _item!: Locale38Detail | undefined;
  private _items!: Array<Locale38Detail>;
  private _pagination!: Pagination<Locale38Detail>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Locale38Detail>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Locale38Detail>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Locale38Detail>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Locale38Detail>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Locale38Detail>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Locale38Detail>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Locale38Detail>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Locale38Detail>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Locale38Detail) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Locale38Detail>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByTypeLocale38DetailId(id: number){
    return this.http.delete<number>(`${this.api}/typelocale38detail/${id}`);
  }

  public findByTypeLocale38DetailId(id: number){
    return this.http.get<Array<Locale38Detail>>(`${this.api}/typelocale38detail/${id}`);
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

  public get item(): Locale38Detail {
    if (this._item == null)
      this._item = new Locale38Detail();
    return this._item;
  }

  public set item(value: Locale38Detail | undefined) {
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

