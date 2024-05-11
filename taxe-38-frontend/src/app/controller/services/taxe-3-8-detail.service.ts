import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Taxe38Detail } from 'src/app/controller/entities/taxe-3-8-detail';
import { Taxe38DetailValidator } from 'src/app/controller/validators/taxe-3-8-detail.validator';

@Injectable({ providedIn: 'root' })
export class Taxe38DetailService {
  private readonly api = environment.apiUrl + "taxe38detail";
  private _item!: Taxe38Detail | undefined;
  private _items!: Array<Taxe38Detail>;
  private _pagination!: Pagination<Taxe38Detail>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Taxe38Detail>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Taxe38Detail>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Taxe38Detail>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Taxe38Detail>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Taxe38Detail>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Taxe38Detail>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Taxe38Detail>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Taxe38Detail>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Taxe38Detail) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Taxe38Detail>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByLocale38DetailId(id: number){
    return this.http.delete<number>(`${this.api}/locale38detail/${id}`);
  }

  public findByLocale38DetailId(id: number){
    return this.http.get<Array<Taxe38Detail>>(`${this.api}/locale38detail/${id}`);
  }
  public deleteByTauxTaxe38Id(id: number){
    return this.http.delete<number>(`${this.api}/tauxtaxe38/${id}`);
  }

  public findByTauxTaxe38Id(id: number){
    return this.http.get<Array<Taxe38Detail>>(`${this.api}/tauxtaxe38/${id}`);
  }
  public deleteByTaxe38Id(id: number){
    return this.http.delete<number>(`${this.api}/taxe38/${id}`);
  }

  public findByTaxe38Id(id: number){
    return this.http.get<Array<Taxe38Detail>>(`${this.api}/taxe38/${id}`);
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

  public get item(): Taxe38Detail {
    if (this._item == null)
      this._item = new Taxe38Detail();
    return this._item;
  }

  public set item(value: Taxe38Detail | undefined) {
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

