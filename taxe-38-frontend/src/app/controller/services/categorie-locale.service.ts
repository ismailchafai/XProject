import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { CategorieLocale } from 'src/app/controller/entities/categorie-locale';
import { CategorieLocaleValidator } from 'src/app/controller/validators/categorie-locale.validator';

@Injectable({ providedIn: 'root' })
export class CategorieLocaleService {
  private readonly api = environment.apiUrl + "categorielocale";
  private _item!: CategorieLocale | undefined;
  private _items!: Array<CategorieLocale>;
  private _pagination!: Pagination<CategorieLocale>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<CategorieLocale>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<CategorieLocale>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<CategorieLocale>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<CategorieLocale>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<CategorieLocale>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<CategorieLocale>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<CategorieLocale>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<CategorieLocale>>(`${this.api}/all`, this.items);
  }

  public delete(dto: CategorieLocale) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<CategorieLocale>) {
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

  public get item(): CategorieLocale {
    if (this._item == null)
      this._item = new CategorieLocale();
    return this._item;
  }

  public set item(value: CategorieLocale | undefined) {
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

