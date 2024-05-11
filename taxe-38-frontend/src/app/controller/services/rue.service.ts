import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Rue } from 'src/app/controller/entities/rue';
import { RueValidator } from 'src/app/controller/validators/rue.validator';

@Injectable({ providedIn: 'root' })
export class RueService {
  private readonly api = environment.apiUrl + "rue";
  private _item!: Rue | undefined;
  private _items!: Array<Rue>;
  private _pagination!: Pagination<Rue>

  private http = inject(HttpClient)

  public keepData: boolean = false
  public returnUrl: string | undefined = undefined
  public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Rue>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Rue>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Rue>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Rue>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Rue>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Rue>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Rue>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Rue>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Rue) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Rue>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }

  public deleteByQuartierId(id: number){
    return this.http.delete<number>(`${this.api}/quartier/${id}`);
  }

  public findByQuartierId(id: number){
    return this.http.get<Array<Rue>>(`${this.api}/quartier/${id}`);
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

  public get item(): Rue {
    if (this._item == null)
      this._item = new Rue();
    return this._item;
  }

  public set item(value: Rue | undefined) {
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

