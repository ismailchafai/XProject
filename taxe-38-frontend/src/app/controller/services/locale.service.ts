import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Locale } from 'src/app/controller/entities/locale';
import { LocaleValidator } from 'src/app/controller/validators/locale.validator';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly api = environment.apiUrl + "locale";
  private _item!: Locale | undefined;
  private _items!: Array<Locale>;
  private _pagination!: Pagination<Locale>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Locale>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Locale>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Locale>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Locale>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Locale>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Locale>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Locale>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Locale>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Locale) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Locale>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByRueId(id: number){
    return this.http.delete<number>(`${this.api}/rue/${id}`);
  }

  public findByRueId(id: number){
    return this.http.get<Array<Locale>>(`${this.api}/rue/${id}`);
  }
  public deleteByRedevableId(id: number){
    return this.http.delete<number>(`${this.api}/redevable/${id}`);
  }

  public findByRedevableId(id: number){
    return this.http.get<Array<Locale>>(`${this.api}/redevable/${id}`);
  }
  public deleteByCategorieLocaleId(id: number){
    return this.http.delete<number>(`${this.api}/categorielocale/${id}`);
  }

  public findByCategorieLocaleId(id: number){
    return this.http.get<Array<Locale>>(`${this.api}/categorielocale/${id}`);
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

  public get item(): Locale {
    if (this._item == null)
      this._item = new Locale();
    return this._item;
  }

  public set item(value: Locale | undefined) {
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

