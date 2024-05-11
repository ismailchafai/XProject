import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { TypeLocale38Detail } from 'src/app/controller/entities/type-locale-3-8-detail';
import { TypeLocale38DetailValidator } from 'src/app/controller/validators/type-locale-3-8-detail.validator';

@Injectable({ providedIn: 'root' })
export class TypeLocale38DetailService {
  private readonly api = environment.apiUrl + "typelocale38detail";
  private _item!: TypeLocale38Detail | undefined;
  private _items!: Array<TypeLocale38Detail>;
  private _pagination!: Pagination<TypeLocale38Detail>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<TypeLocale38Detail>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<TypeLocale38Detail>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<TypeLocale38Detail>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<TypeLocale38Detail>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<TypeLocale38Detail>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<TypeLocale38Detail>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<TypeLocale38Detail>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<TypeLocale38Detail>>(`${this.api}/all`, this.items);
  }

  public delete(dto: TypeLocale38Detail) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<TypeLocale38Detail>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
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

  public get item(): TypeLocale38Detail {
    if (this._item == null)
      this._item = new TypeLocale38Detail();
    return this._item;
  }

  public set item(value: TypeLocale38Detail | undefined) {
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

