import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Taxe38 } from 'src/app/controller/entities/taxe-3-8';
import { Taxe38Validator } from 'src/app/controller/validators/taxe-3-8.validator';

@Injectable({ providedIn: 'root' })
export class Taxe38Service {
  private readonly api = environment.apiUrl + "taxe38";
  private _item!: Taxe38 | undefined;
  private _items!: Array<Taxe38>;
  private _pagination!: Pagination<Taxe38>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Taxe38>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Taxe38>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Taxe38>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Taxe38>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Taxe38>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Taxe38>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Taxe38>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Taxe38>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Taxe38) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Taxe38>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByRedevableId(id: number){
    return this.http.delete<number>(`${this.api}/redevable/${id}`);
  }

  public findByRedevableId(id: number){
    return this.http.get<Array<Taxe38>>(`${this.api}/redevable/${id}`);
  }
  public deleteByLocaleId(id: number){
    return this.http.delete<number>(`${this.api}/locale/${id}`);
  }

  public findByLocaleId(id: number){
    return this.http.get<Array<Taxe38>>(`${this.api}/locale/${id}`);
  }
  public deleteByTrimId(id: number){
    return this.http.delete<number>(`${this.api}/trim/${id}`);
  }

  public findByTrimId(id: number){
    return this.http.get<Array<Taxe38>>(`${this.api}/trim/${id}`);
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

  public get item(): Taxe38 {
    if (this._item == null)
      this._item = new Taxe38();
    return this._item;
  }

  public set item(value: Taxe38 | undefined) {
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

